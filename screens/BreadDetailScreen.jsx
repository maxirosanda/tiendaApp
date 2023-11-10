import { StyleSheet, View , Text } from "react-native"
import { useSelector } from "react-redux"

const BreadDetailScreen = () => {

    const breadState = useSelector((state) => state.breads.selected)

    console.log(breadState)
    return  <View style={styles.screen}>
                <View>
                    <Text style={styles.title}>{breadState.title}</Text>
                </View>
                <View>
                    <Text style={styles.description}>{breadState.description}</Text>
                </View>
                <View>
                    <Text style={styles.price}>{breadState.price}</Text>
                </View>   
            </View>
}

const styles = StyleSheet.create({

    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:10
    },
    title:{
        fontSize:25
    },
    price:{
        fontSize:40
    },
    description:{
        fontSize:20
    }
})

export default BreadDetailScreen
