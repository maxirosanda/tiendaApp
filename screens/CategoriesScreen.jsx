import { FlatList, StyleSheet } from "react-native"
import { useSelector,useDispatch } from "react-redux"
import CategoryGridTitle from "../components/CategoryGridTitle"
import { setSelectedCategory } from "../app/features/categorys/categorySlice"

const CategoriesScreen = ({navigation}) => {

    const dispatch = useDispatch()
   const categoriesState = useSelector(state => state.categories)

    const handlerSelectedCategory = (categoryId,categoryTitle) =>{
        dispatch(setSelectedCategory({ id: categoryId }))
        navigation.navigate("BreadCategory",{
            name:categoryTitle
        })
    }
    return (
        <FlatList 
            data={categoriesState.categories}
            keyExtractor={data => data.id}
            renderItem={ data => <CategoryGridTitle item={data.item} onSelected={handlerSelectedCategory}/>}
            numColumns={2}/>
    )
}

const styles = StyleSheet.create({

    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default CategoriesScreen
