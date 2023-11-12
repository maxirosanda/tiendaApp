import { useEffect } from "react"
import { FlatList, StyleSheet,View } from "react-native"
import { useSelector,useDispatch } from "react-redux"
import CategoryGridTitle from "../components/CategoryGridTitle"
import { setSelectedCategory } from "../app/features/categorys/categorySlice"
import { fetchCategories } from "../app/features/categorys/categoryApi"
import ShowCart from "../components/showCart"

const CategoriesScreen = ({navigation}) => {

    const dispatch = useDispatch()
   const categoriesState = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    const handlerShowCart = () => navigation.navigate("Cart")
    const handlerSelectedCategory = (categoryId,categoryTitle) =>{
        dispatch(setSelectedCategory({ id: categoryId }))
        navigation.navigate("BreadCategory",{
            name:categoryTitle
        })
    }
    return <View>
                <FlatList 
                    data={categoriesState.categories}
                    keyExtractor={data => data.id}
                    renderItem={ data => <CategoryGridTitle item={data.item} onSelected={handlerSelectedCategory}/>}
                    numColumns={2}/>
                    <ShowCart handlerShowCart={handlerShowCart}/>
            </View>
    
}

const styles = StyleSheet.create({

    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default CategoriesScreen
