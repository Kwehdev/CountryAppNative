import React from 'react'
import { Text } from 'react-native'

type ParagraphProps = {
  children: string | string[]
}

export default function Paragraph({ children }: ParagraphProps) {
  return (
    <Text
      style={{
        color: '#ffffff',
        fontFamily: 'Roboto',
        fontSize: 18,
        textAlign: 'center',
        alignSelf: 'center',
      }}
    >
      {children}
    </Text>
  )
}
