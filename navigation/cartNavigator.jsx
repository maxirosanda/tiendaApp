import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from "../screens/CartScreen"

const CartsStack = createNativeStackNavigator()

const CartsNavigator = () => {
    return <CartsStack.Navigator
                initialRouteName="Carts"
            >
                <CartsStack.Screen
                    name="Carts"
                    component={CartScreen}
                    options={{title:"Carrito"}}
                />


            </CartsStack.Navigator>
}

export default CartsNavigator