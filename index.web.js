import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

export default class GHViewer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native and Electron!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

AppRegistry.registerComponent('GHViewer', () => GHViewer)
AppRegistry.runApplication('GHViewer', {
  rootTag: document.getElementById('root'),
})
