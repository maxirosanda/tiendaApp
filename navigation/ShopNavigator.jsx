import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import BreadDetailScreen from '../screens/BreadDetailScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'
import CartScreen from "../screens/CartScreen"


const ShopStack = createNativeStackNavigator()

  const ShopNavigator = () => {
    return   <ShopStack.Navigator
                  initialRouteName='Home'
                  screenOptions={{
                    headerStyle: {
                      backgroundColor:"red"
                    },
                    headerTintColor:"blue",
                    headerTitleStyle:{
                      fontWeight:"bold"
                    }
                  }}
              >
              <ShopStack.Screen name="Home" component={CategoriesScreen} options={{ title: 'Nuestra Panaderia' }} />
              <ShopStack.Screen name="BreadCategory" component={CategoryBreadScreen} options={({route}) => ({ title: route.params.name })} />
              <ShopStack.Screen name="DetailBread" component={BreadDetailScreen} options={({route}) => ({ title: route.params.name })} />
              <ShopStack.Screen name="Cart" component={CartScreen} />
            </ShopStack.Navigator>
  }

  export default ShopNavigator