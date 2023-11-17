import { StyleSheet, View , Text, Button, TextInput } from "react-native"
import { useSelector,useDispatch } from "react-redux"
import {addProductToCart} from "../app/features/cart/cartApi"
import { useState } from "react"

const BreadDetailScreen = ({navigation}) => {
    const [quantity,setQuantity] = useState("1")
    const dispatch = useDispatch()
    const breadState = useSelector((state) => state.breads.selected)

    const handlerAddProducts = (userId = 3,product) => {
        dispatch(addProductToCart({ userId: userId, product: product }));
        navigation.navigate("Cart")
    }
   
    return  <View style={styles.screen}>
                <View>
                    <Text style={styles.title}>{breadState.title}</Text>
                </View>
                <View>
                    <Text style={styles.description}>{breadState.description}</Text>
                </View>
                <View>
                    <Text style={styles.price} >{breadState.price}</Text>
                </View>   
                <View>
                    <TextInput placeholder="ingrese cantidad" onChangeText={(value)=>setQuantity(value)} value={quantity} />
                   <Button title="Carrito" onPress={()=> handlerAddProducts(2,{...breadState,...{quantity:parseInt(quantity)}})}/>
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
