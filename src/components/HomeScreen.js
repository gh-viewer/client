// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Icon, Text } from 'react-native-elements'
import { graphql, QueryRenderer } from 'react-relay'

import { EnvironmentPropType } from '../Environment'

import ScreenLoader from './ScreenLoader'
import sharedStyles from './styles'

type QueryErrorProps = {
  error: Error,
  retry: () => void,
}
const QueryError = ({ error, retry }: QueryErrorProps) =>
  <View style={[sharedStyles.scene, sharedStyles.centerContents]}>
    <View style={sharedStyles.mainContents}>
      <Text h2 style={sharedStyles.textCenter}>
        {error.message || 'Request error'}
      </Text>
    </View>
    <View style={sharedStyles.bottomContents}>
      <Button onPress={retry} title="Retry" />
    </View>
  </View>

type HomeProps = {
  viewer: {
    login: string,
  },
}
const Home = ({ viewer }: HomeProps) =>
  <View style={[sharedStyles.scene, sharedStyles.centerContents]}>
    <View style={sharedStyles.mainContents}>
      <Icon name="octoface" size={60} type="octicon" />
      <Text h2 style={sharedStyles.textCenter}>
        Welcome, {viewer.login}!
      </Text>
    </View>
  </View>

export default class HomeScreen extends Component {
  static contextTypes = {
    environment: EnvironmentPropType.isRequired,
  }

  render() {
    return (
      <QueryRenderer
        environment={this.context.environment}
        query={graphql`
          query HomeScreenQuery {
            viewer {
              login
            }
          }
        `}
        render={({ error, props, retry }) => {
          if (error) {
            return <QueryError error={error} retry={retry} />
          } else if (props) {
            return <Home {...props} />
          } else {
            return <ScreenLoader />
          }
        }}
      />
    )
  }
}
