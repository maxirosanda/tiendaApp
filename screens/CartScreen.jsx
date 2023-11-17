import { useEffect } from "react"
import {View,Text,StyleSheet,FlatList,Button} from "react-native"
import CartItem from "../components/CartItem"
import { useSelector,useDispatch } from "react-redux"
import { fetchCart ,removeProductFromCart} from "../app/features/cart/cartApi"
import { addOrder } from "../app/features/orders/ordersApi"

const CarritoScreen = () => {
    const dispatch = useDispatch()
    const cartState = useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(fetchCart(2))
      }, [dispatch])

      const handlerAddOrder = (userId = 2,order) => {
        dispatch(addOrder({ userId: userId, order: order}));
    }
      const handlerDeleteProducts = (userId = 2,productId) => {
        dispatch(removeProductFromCart({ userId: userId, productId: productId }));
    }
    return <View style={styles.container}>
                <View style={styles.list} >
                    <FlatList
                        data={cartState.cart.products}
                        keyExtractor={item => item.id}
                        renderItem={(item)=><CartItem item={item.item} onDelete={handlerDeleteProducts}/>}
                        numColumns={1}
                    />
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text}>Total: $ {cartState.total}</Text>
                </View>
                <Button title="Comprar" onPress={()=>handlerAddOrder(2,{products:cartState.cart.products,total:cartState.total})}/>
            </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:12
    },
    footer:{
        flex:.2,
        borderTopColor:"#ccc",
        borderTopWidth:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end"
    },
    list:{
        flex:.8
    },
    text:{
        fontSize:24,
        padding:8
    }
})

export default CarritoScreen