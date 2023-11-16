import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'


const AuthStack = createNativeStackNavigator()

const AuthNavigator = () => {
    return <AuthStack.Navigator
              initialRouteName="Login"
              screenOptions={{
                headerSown:false
              }}
           >
              <AuthStack.Screen name="login" component={Login}/>
              <AuthStack.Screen name="signup" component={Signup}/>
           </AuthStack.Navigator>
}

export default AuthNavigator