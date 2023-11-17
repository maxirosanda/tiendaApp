import { useEffect } from "react"
import { FlatList, StyleSheet,View,Button } from "react-native"
import { useSelector,useDispatch } from "react-redux"
import CategoryGridTitle from "../components/CategoryGridTitle"
import { setSelectedCategory } from "../app/features/categorys/categorySlice"
import { fetchCategories } from "../app/features/categorys/categoryApi"
import {logout} from "../app/features/Auth/authSlice"
import ShowCart from "../components/showCart"

const CategoriesScreen = ({navigation}) => {

    const dispatch = useDispatch()
   const categoriesState = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    const handlerLogout = () => {
        dispatch(logout())
    }
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
                    <Button title="deslogiarme" onPress={handlerLogout}/>
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
