import { useEffect } from "react"
import { View , Text } from "react-native"
import OrderItem from "../components/OrderItem"
import { useDispatch,useSelector } from "react-redux"
import { fetchOrders } from "../app/features/orders/ordersApi"

const OrdersScreen = () => {

    const dispatch = useDispatch()
    const ordersState = useSelector((state) => state.orders)
    useEffect(() => {
        dispatch(fetchOrders(2))
      }, [dispatch])
      console.log(ordersState.orders)
    return <View>
                <OrderItem  onDelete={()=>{console.log(ordersState)}}/>
           </View>
}

export default OrdersScreen