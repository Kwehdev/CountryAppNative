import React from 'react'
import { Text } from 'react-native'

type TitleTextProps = {
  children: string | string[]
}

export default function TitleText({ children }: TitleTextProps) {
  return (
    <Text style={{ color: '#ffffff', fontFamily: 'Roboto', fontSize: 25 }}>
      {children}
    </Text>
  )
}
