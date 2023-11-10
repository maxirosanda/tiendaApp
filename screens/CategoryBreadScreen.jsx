import { StyleSheet, View ,FlatList } from "react-native"
import { useSelector } from "react-redux"
import BreadItem from "../components/BreadItem"

const CategoryBreadScreen = ({navigation,route}) => {

    const breadsState = useSelector(state => state.breads)
    const {categoryID} = route.params
    const displayBreads = breadsState.filter(item => item.categoryId == categoryID)

    const handlerSeleted = (bread) => {
        navigation.navigate("DetailBread",{bread,name:bread.title})
    }

    return <View style={styles.screen}>
              <FlatList
                data={displayBreads}
                keyExtractor={item =>item.id}
                renderItem={(data)=> <BreadItem item={data.item} onSelectBread={handlerSeleted}/>}
              />
           </View>
}

const styles = StyleSheet.create({

    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default CategoryBreadScreen
