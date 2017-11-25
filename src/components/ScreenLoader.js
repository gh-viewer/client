// @flow

import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Text } from 'react-native-elements'

import sharedStyles from './styles'

const ScreenLoader = ({ text }: { text?: string }) => (
  <View style={[sharedStyles.scene, sharedStyles.centerContents]}>
    <View style={sharedStyles.mainContents}>
      <ActivityIndicator animating size="large" />
      <Text h2 style={sharedStyles.textCenter}>
        {text || 'Loading...'}
      </Text>
    </View>
  </View>
)

export default ScreenLoader
