import React from 'react'
import { Text } from 'react-native'

type AppTextProps = {
  children: JSX.Element | JSX.Element[]
}

export default function AppText({ children }: AppTextProps) {
  return (
    <Text
      style={{
        color: '#ffffff',
      }}
    >
      {children}
    </Text>
  )
}
