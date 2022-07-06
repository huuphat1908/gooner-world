import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from '@/navigations/AuthNavigator'
import AppNavigator from '@/navigations/AppNavigator'

const MainNavigator = () => {
  const isLoggedIn = false

  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  )
}

export default MainNavigator
