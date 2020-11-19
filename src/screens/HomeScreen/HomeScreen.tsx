import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'
import Layout from '../../components/Layout'
import { HomeScreenNavigationProp } from '../../typings'

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <Layout>
      <View>
        <Button
          title="Go to the about page"
          onPress={() => navigation.navigate('About')}
        />
      </View>
      <Text>Hello World</Text>
    </Layout>
  )
}
