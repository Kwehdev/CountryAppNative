import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Layout from '../../components/Layout'
import Paragraph from '../../components/Paragraph'
import TitleText from '../../components/TitleText/TitleText'
import { AboutScreenNavigationProp } from '../../typings'

type AboutScreenProps = {
  navigation: AboutScreenNavigationProp
}

export default function AboutScreen({ navigation }: AboutScreenProps) {
  return (
    <Layout>
      <View style={{ flexGrow: 1 }}>
        <View style={styles.titleContainer}>
          <TitleText>About this app</TitleText>
        </View>
        <View style={styles.paragraphContainer}>
          <Paragraph>
            The purpose of this app is to retrieve data from an API, and list
            them alphabetically for a user to browse. A User can favourite a
            country, or view more information about it.
          </Paragraph>
          <Paragraph>
            This App was built using React-Native & TypeScript, intended as a
            learning experience for me as this is the first time I have used
            React-Native. I hope to gain a deeper understanding of how mobile
            apps function, and further my own skills with the technology.
          </Paragraph>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Go to the homepage"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  paragraphContainer: {
    flexGrow: 0.2,
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 4,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 'auto',
  },
})
