// @flow

import React, { Component, createElement } from 'react'
import { NetInfo, View } from 'react-native'
import { Button, Icon, Text } from 'react-native-elements'
import { QueryRenderer } from 'react-relay'

import { EnvironmentPropType } from '../Environment'

import ScreenLoader from './ScreenLoader'
import sharedStyles from './styles'

type QueryErrorProps = {
  error: Error,
  retry: () => void,
}

class QueryError extends Component {
  props: QueryErrorProps
  state: {
    waitingNetwork: boolean,
  }
  connectionListener: ?{
    remove: () => void,
  }

  constructor(props: QueryErrorProps) {
    super(props)

    const waitingNetwork = props.error.message === 'Failed to fetch'
    if (waitingNetwork) {
      this.addConnectionListener()
    }

    this.state = { waitingNetwork }
  }

  addConnectionListener() {
    this.connectionListener = NetInfo.isConnected.addEventListener(
      'change',
      (isConnected: boolean) => {
        if (isConnected) {
          this.props.retry()
        }
      },
    )
  }

  componentWillUnmount() {
    if (this.connectionListener) {
      this.connectionListener.remove()
    }
  }

  render() {
    return this.state.waitingNetwork
      ? <View style={[sharedStyles.scene, sharedStyles.centerContents]}>
          <View style={sharedStyles.mainContents}>
            <Text h3 style={sharedStyles.textCenter}>
              Waiting for network...
            </Text>
          </View>
        </View>
      : <View style={[sharedStyles.scene, sharedStyles.centerContents]}>
          <View style={sharedStyles.mainContents}>
            <Text h3 style={sharedStyles.textCenter}>
              {this.props.error.message || 'Request failed'}
            </Text>
          </View>
          <View style={sharedStyles.bottomContents}>
            <Button onPress={this.props.retry} title="Retry" />
          </View>
        </View>
  }
}

export default class ScreenRenderer extends Component {
  static contextTypes = {
    environment: EnvironmentPropType.isRequired,
  }

  props: {
    container: Component<*, *, *>,
    navigation: Object,
    query: mixed,
    variables?: Object,
  }

  render() {
    return (
      <QueryRenderer
        environment={this.context.environment}
        query={this.props.query}
        variables={this.props.variables}
        render={({ error, props, retry }) => {
          if (error) {
            return <QueryError error={error} retry={retry} />
          } else if (props) {
            return createElement(this.props.container, {
              navigation: this.props.navigation,
              ...props,
            })
          } else {
            return <ScreenLoader />
          }
        }}
      />
    )
  }
}
