import React from 'react'
import { View, StyleSheet, Image, StatusBar } from 'react-native'
import Navbar from '../Navbar'
import headerImage from '../../../assets/header-image.jpg'

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: LayoutProps) {
  return (
    <View style={styles.container}>
      <Image
        source={headerImage}
        style={{ width: '100%', height: '25%' }}
      ></Image>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
  },
})
