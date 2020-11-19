import React from 'react'
import { Text } from 'react-native'

import AppText from '../AppText'

type TitleTextProps = {
  children: string | string[]
}

export default function TitleText({ children }: TitleTextProps) {
  return (
    <AppText>
      <Text style={{ fontSize: 25 }}>{children}</Text>
    </AppText>
  )
}
