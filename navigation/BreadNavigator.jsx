import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import BreadDetailScreen from '../screens/BreadDetailScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'

const Stack = createNativeStackNavigator()

 const BreadNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
        <Stack.Screen name="Home" component={CategoriesScreen} options={{ title: 'Nuestra Panaderia' }} />
        <Stack.Screen name="BreadCategory" component={CategoryBreadScreen} options={({route}) => ({ title: route.params.name })} />
        <Stack.Screen name="DetailBread" component={BreadDetailScreen} options={({route}) => ({ title: route.params.name })} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default BreadNavigator