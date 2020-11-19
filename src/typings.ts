import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types'

type RootStackParamList = {
  Home: undefined
  About: undefined
}

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>

export type AboutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'About'
>
