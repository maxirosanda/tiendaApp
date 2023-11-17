import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrdersScreen from '../screens/OrdersScreen'

const OrdersStack = createNativeStackNavigator()

const OrdersNavigator = () => {
    return <OrdersStack.Navigator
                initialRouteName="Orders"
            >
                <OrdersStack.Screen
                    name="Orders"
                    component={OrdersScreen}
                    options={{title:"Ordenes"}}
                />


            </OrdersStack.Navigator>
}

export default OrdersNavigator