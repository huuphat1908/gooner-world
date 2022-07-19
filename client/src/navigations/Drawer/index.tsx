import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Text } from 'native-base'

import styles from './Drawer.style'
import { useAppNavigation } from '@/hooks'
import { routes } from '@/constants'

const Drawer = (props: any) => {
  const navigation = useAppNavigation()

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <DrawerItem
        label="Home"
        onPress={() => navigation.navigate(routes.HOME)}
      />
      <DrawerItem
        label="Profile"
        onPress={() => navigation.navigate(routes.PROFILE)}
      />
      <Text>Arsenal</Text>
    </DrawerContentScrollView>
  )
}

export default Drawer
