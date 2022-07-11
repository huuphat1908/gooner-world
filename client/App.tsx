import React, { useEffect } from 'react'
import { NativeBaseProvider } from 'native-base'
import SplashScreen from 'react-native-splash-screen'

import MainNavigator from '@/navigations/MainNavigator'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NativeBaseProvider>
      <MainNavigator />
    </NativeBaseProvider>
  )
}

export default App
