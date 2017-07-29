import React, { Component } from 'react'
import { View } from 'react-native'
import { Icon, Text } from 'react-native-elements'

import sharedStyles from './styles'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={[sharedStyles.scene, sharedStyles.centerContents]}>
        <View style={sharedStyles.mainContents}>
          <Icon name="octoface" size={60} type="octicon" />
          <Text h2 style={sharedStyles.textCenter}>
            Welcome!
          </Text>
        </View>
      </View>
    )
  }
}
