import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { AppNavigatorParamList } from '@/navigations/AppNavigator/AppNavigatorParamList'
import { HOME, PROFILE } from '@/constants/routes'
import { Home, Profile } from '@/screens'

const AppDrawer = createDrawerNavigator<AppNavigatorParamList>()

const AppNavigator = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name={HOME} component={Home} />
      <AppDrawer.Screen name={PROFILE} component={Profile} />
    </AppDrawer.Navigator>
  )
}

export default AppNavigator
