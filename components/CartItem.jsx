import {View,Text,StyleSheet,Button} from "react-native"


const CartItem = ({item,onDelete}) => {
    console.log("es itma" ,item)
    return <View style={styles.item}>
                <View>
                    <Text style={styles.text}>{item.title}</Text>
                </View>
                <View style={styles.detail}>
                    <View >
                        <Text>Cantidad: {item.quantity}</Text>
                    </View>
                    <View>
                        <Text>Precio: $ {item.price}</Text>
                    </View>
                    <View>
                        <Button title="borrar" onPress={()=>onDelete(2,item.id)}/>
                    </View>
                </View>
           </View>
}

const styles = StyleSheet.create({
    item:{
        flex:1,
        padding:8
    },
    detail:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"space-between"
    },
    text:{
        fontSize:16,
    }
})

export default CartItem