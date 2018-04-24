// @flow

import React, { Component, createElement, type ComponentType } from 'react'
import { NetInfo, View } from 'react-native'
import { Button, Icon, Text } from 'react-native-elements'
import { QueryRenderer } from 'react-relay'
import type { Environment } from 'relay-runtime'

import { EnvironmentConsumer } from './EnvironmentProvider'
import ScreenLoader from './ScreenLoader'
import sharedStyles from './styles'

type QueryErrorProps = {
  error: Error,
  retry: () => void,
}
type QueryErrorState = {
  waitingNetwork: boolean,
}

class QueryError extends Component<QueryErrorProps, QueryErrorState> {
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
    return this.state.waitingNetwork ? (
      <View style={[sharedStyles.scene, sharedStyles.centerContents]}>
        <View style={sharedStyles.mainContents}>
          <Text h3 style={sharedStyles.textCenter}>
            Waiting for network...
          </Text>
        </View>
      </View>
    ) : (
      <View style={[sharedStyles.scene, sharedStyles.centerContents]}>
        <View style={sharedStyles.mainContents}>
          <Text h3 style={sharedStyles.textCenter}>
            {this.props.error.message || 'Request failed'}
          </Text>
        </View>
        <View style={sharedStyles.bottomContents}>
          <Button onPress={this.props.retry} title="Retry" />
        </View>
      </View>
    )
  }
}

type ScreenRendererProps = {
  container: ComponentType<any>,
  navigation: Object,
  query: mixed,
  variables?: Object,
}

const ScreenRenderer = ({
  container,
  navigation,
  query,
  variables,
}: ScreenRendererProps) => (
  <EnvironmentConsumer>
    {(environment: ?Environment) =>
      environment ? (
        <QueryRenderer
          environment={environment}
          query={query}
          variables={variables}
          render={({ error, props, retry }) => {
            return error ? (
              <QueryError error={error} retry={retry} />
            ) : props ? (
              createElement(container, {
                environment,
                navigation,
                ...props,
              })
            ) : (
              <ScreenLoader />
            )
          }}
        />
      ) : (
        <ScreenLoader />
      )
    }
  </EnvironmentConsumer>
)

export default ScreenRenderer
