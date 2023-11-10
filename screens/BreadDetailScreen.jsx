import { StyleSheet, View , Text } from "react-native"


const BreadDetailScreen = ({route}) => {
    const bread = route.params.bread
    return  <View style={styles.screen}>
                <View>
                    <Text style={styles.title}>{bread.title}</Text>
                </View>
                <View>
                    <Text style={styles.description}>{bread.description}</Text>
                </View>
                <View>
                    <Text style={styles.price}>{bread.price}</Text>
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
