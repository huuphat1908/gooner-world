import React from 'react'
import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'

import { colors } from '@/constants'
import { theme } from '@/configs'
import MainNavigator from '@/navigations/MainNavigator'

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar backgroundColor={colors.red} barStyle="light-content" />
      <MainNavigator />
    </NativeBaseProvider>
  )
}

export default App
