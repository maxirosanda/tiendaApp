import { FlatList, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

import CategoryGridTitle from "../components/CategoryGridTitle"

const CategoriesScreen = ({navigation}) => {

   const categoriesState = useSelector(state => state.categories)

    const handlerSelectedCategory = (item) =>{
        navigation.navigate("BreadCategory",{
            categoryID:item.id,
            name:item.title
        })
    }
    return (
        <FlatList 
            data={categoriesState}
            keyExtractor={item => item.id}
            renderItem={ item => <CategoryGridTitle item={item.item} onSelected={handlerSelectedCategory}/>}
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
