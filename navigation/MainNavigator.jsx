import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './AuthNavigator'
import ShopNavigator from './ShopNavigator'
import { useSelector } from 'react-redux'

 const MainNavigator = () => {
    const user = useSelector(state => state.auth.user)
    
  return (
    <NavigationContainer>
      {
        user ? <ShopNavigator/> : <AuthNavigator/>
      }
    </NavigationContainer>
  )
}
export default MainNavigator