import { StyleSheet, View , Text,Button,FlatList } from "react-native"
import CATEGORIES from "../data/mock-data"

const CategoryBreadScreen = ({navigation,route}) => {

    const {categoryID} = route.params
    const selectedCategory = CATEGORIES.find(cat => cat.id == categoryID)

    return <View style={styles.screen}>
                <Text>{selectedCategory.title}</Text>
                <Button
                     title="ir a detalle"
                     onPress={() => navigation.navigate('DetailBread')}
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
