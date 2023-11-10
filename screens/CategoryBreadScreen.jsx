import { useEffect } from "react"
import { StyleSheet, View ,FlatList } from "react-native"
import { useSelector,useDispatch } from "react-redux"
import BreadItem from "../components/BreadItem"
import { setSelectedBread ,setFilteredBread} from "../app/features/breads/breadSlice"

const CategoryBreadScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const breadsState = useSelector((state) => state.breads)
    const categoryState = useSelector(state => state.categories.selected)

    useEffect(() => {
        dispatch(setFilteredBread({ filterType: categoryState.id }))
    }, [dispatch, categoryState])

    const handlerSeleted = (breadId,title) => {
        dispatch(setSelectedBread({ id: breadId }))
        navigation.navigate("DetailBread",{name:title})
    }

    return <View style={styles.screen}>
              <FlatList
                data={breadsState.filteredBread}
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
