// @flow

import React, { Component, type Element } from 'react'
import { Provider } from 'react-redux'

import { create } from '../Store'

import ScreenLoader from './ScreenLoader'

export default class StoreProvider extends Component {
  props: {
    children?: Element<*>,
  }
  state: {
    store?: Object,
  } = {}

  componentDidMount() {
    this.createStore()
  }

  async createStore() {
    this.setState({ store: await create() })
  }

  render() {
    return this.state.store
      ? <Provider store={this.state.store}>
          {this.props.children}
        </Provider>
      : <ScreenLoader />
  }
}
