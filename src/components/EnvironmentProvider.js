// @flow

import React, { Component, type Element } from 'react'
import { StyleSheet, View, WebView } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { connect } from 'react-redux'
import type { Environment } from 'relay-runtime'
import { parse } from 'url'

import { create, EnvironmentPropType } from '../Environment'
import type { Action } from '../Store'

import ScreenLoader from './ScreenLoader'
import sharedStyles from './styles'

type AuthState = 'UNAUTHORIZED' | 'LOADING' | 'AUTHORIZE' | 'AUTHORIZED'
type NavigationState = {
  loading: boolean,
  url: string,
}
type Props = {
  access_token: ?string,
  children: Element<*>,
  dispatch: (action: Action) => void,
}

// Edit here if you want to use your own authentication server
const AUTH_SERVER = 'ghviewer.herokuapp.com'

class EnvironmentProvider extends Component {
  static childContextTypes = {
    environment: EnvironmentPropType,
  }

  props: Props
  state: {
    auth: AuthState,
    environment: ?Environment,
  }

  constructor(props: Props) {
    super(props)
    this.state = this.getState(props)
  }

  getState(props: Props) {
    return props.access_token
      ? {
          auth: 'AUTHORIZED',
          environment: create(props.access_token, this.onUnauthorized),
        }
      : {
          auth: 'UNAUTHORIZED',
          environment: null,
        }
  }

  getChildContext() {
    return {
      environment: this.state.environment,
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.access_token !== this.props.access_token) {
      this.setState(this.getState(nextProps))
    }
  }

  onUnauthorized = () => {
    this.props.dispatch({ type: 'AUTH_INVALID' })
  }

  onNavigationStateChange = (state: NavigationState) => {
    const { host, pathname, query } = parse(state.url, true)
    if (
      host === AUTH_SERVER &&
      pathname === '/success' &&
      query &&
      query.access_token
    ) {
      this.props.dispatch({
        type: 'AUTH_SUCCESS',
        auth: query,
      })
    }
  }

  onLoadEnd = () => {
    if (this.state.auth === 'LOADING') {
      this.setState({ auth: 'AUTHORIZE' })
    }
  }

  onPressAuthorize = () => {
    this.setState({ auth: 'LOADING' })
  }

  render() {
    if (this.state.environment) {
      return this.props.children
    }
    const { auth } = this.state

    if (auth === 'UNAUTHORIZED') {
      return (
        <View style={[sharedStyles.scene, sharedStyles.centerContents]}>
          <View style={sharedStyles.mainContents}>
            <Text h3 style={styles.title}>
              Welcome to GH Viewer!
            </Text>
            <Text style={styles.contents}>
              In order to use this application, you need to authorize it to
              access some of your GitHub data
            </Text>
            <Button
              backgroundColor="#28a745"
              icon={{ name: 'shield', type: 'octicon' }}
              onPress={this.onPressAuthorize}
              title="Authorize with GitHub"
            />
          </View>
        </View>
      )
    }

    const webView = (
      <WebView
        onLoadEnd={this.onLoadEnd}
        onNavigationStateChange={this.onNavigationStateChange}
        source={{ uri: `https://${AUTH_SERVER}/authorize` }}
        style={auth === 'AUTHORIZE' ? sharedStyles.scene : styles.webviewHidden}
      />
    )
    const loader = auth === 'AUTHORIZE' ? null : <ScreenLoader />

    return (
      <View style={styles.container}>
        {loader}
        {webView}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contents: {
    marginVertical: 15,
  },
  title: {
    textAlign: 'center',
  },
  webviewHidden: {
    height: 0,
  },
})

export default connect(state => ({
  access_token: (state.auth && state.auth.access_token) || null,
}))(EnvironmentProvider)
