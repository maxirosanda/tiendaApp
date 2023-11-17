import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './AuthNavigator'
import TabsNavigator from './tabNavigator'

 const MainNavigator = () => {
    const user = useSelector(state => state.auth.user)
    
  return (
    <NavigationContainer>
      <TabsNavigator/>
    </NavigationContainer>
  )
}
export default MainNavigator