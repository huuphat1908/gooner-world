import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorParamList } from '@/navigations/AuthNavigator/AuthNavigatorParamList'
import { StackNavigationProp } from '@react-navigation/stack'

export default () => {
  return useNavigation<StackNavigationProp<AuthNavigatorParamList>>()
}
