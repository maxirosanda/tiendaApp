import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet,View,Text } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import OrdersNavigator from './ordersNavigator'
import ShopNavigator from './ShopNavigator'
import CartsNavigator from './cartNavigator'

const TabsStack = createBottomTabNavigator()

const TabsNavigator = () => {
    return <TabsStack.Navigator
                initialRouteName='Shop'
                screenOptions={{
                    tabBarShowLabel:false,
                    tabBarStyle:{
                        position:"absolute",
                        bottom:25,
                        left:20,
                        right:20,
                        elevation:0,
                        borderRadius:15,
                        height:90,
                        ...styles.shadow
                    }
                }}
                
            >
            <TabsStack.Screen 
                name='Shop' 
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({focused})=>{
                        return <View style={styles.item}>
                                    <Ionicons name='md-home' size={24} color="black"/>
                                    <Text>Comprar</Text> 
                                </View>
                    }
                }}
            /> 
            <TabsStack.Screen  
                name='Cart' 
                component={CartsNavigator}
                options={{
                    tabBarIcon: ({focused})=>{
                        return <View style={styles.item}>
                                    <Ionicons name='md-cart' size={24} color="black"/>
                                    <Text>Carrito</Text> 
                                </View>
                    }
                }}
            /> 
            <TabsStack.Screen  
                name='Orders' 
                component={OrdersNavigator}
                options={{
                    tabBarIcon: ({focused})=>{
                        return <View style={styles.item}>
                                    <Ionicons name='md-list' size={24} color="black"/>
                                    <Text>Ordenes</Text> 
                                </View>
                    }
                }}
            />    
            </TabsStack.Navigator>
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor:"#7f5df0",
        shadowOffset:{width:0,height:10},
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    },
    item:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default TabsNavigator