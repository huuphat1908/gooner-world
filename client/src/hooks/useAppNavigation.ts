import { useNavigation } from '@react-navigation/native'
import { AppNavigatorParamList } from '@/navigations/AppNavigator/AppNavigatorParamList'
import { DrawerNavigationProp } from '@react-navigation/drawer'

export default () => {
  return useNavigation<DrawerNavigationProp<AppNavigatorParamList>>()
}
