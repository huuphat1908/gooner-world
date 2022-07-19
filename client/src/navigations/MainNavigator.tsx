import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RNBootSplash from 'react-native-bootsplash'

import AuthNavigator from '@/navigations/AuthNavigator'
import AppNavigator from '@/navigations/AppNavigator'

const MainNavigator = () => {
  const isLoggedIn = false

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
      {isLoggedIn ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  )
}

export default MainNavigator
