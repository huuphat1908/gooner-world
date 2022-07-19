import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { AppNavigatorParamList } from '@/navigations/AppNavigator/AppNavigatorParamList'
import { routes } from '@/constants'
import { Home, Profile } from '@/screens'
import Drawer from '@/navigations/Drawer'

const AppDrawer = createDrawerNavigator<AppNavigatorParamList>()

const AppNavigator = () => {
  return (
    <AppDrawer.Navigator
      initialRouteName={routes.HOME}
      drawerContent={props => <Drawer {...props} />}
      screenOptions={{ drawerType: 'front' }}
    >
      <AppDrawer.Screen name={routes.HOME} component={Home} />
      <AppDrawer.Screen name={routes.PROFILE} component={Profile} />
    </AppDrawer.Navigator>
  )
}

export default AppNavigator
