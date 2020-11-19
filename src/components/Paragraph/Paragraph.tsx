import React from 'react'
import { Text } from 'react-native'

import AppText from '../AppText'

type ParagraphProps = {
  children: string | string[]
}

export default function Paragraph({ children }: ParagraphProps) {
  return (
    <AppText>
      <Text>{children}</Text>
    </AppText>
  )
}
