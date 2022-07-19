import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { AuthNavigatorParamList } from '@/navigations/AuthNavigator/AuthNavigatorParamList'
import { LOGIN, REGISTER } from '@/constants/routes'
import { Login, Register } from '@/screens'

const AuthStack = createStackNavigator<AuthNavigatorParamList>()

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator
