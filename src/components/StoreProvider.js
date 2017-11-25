// @flow

import React, { Component, type Node } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import { persistor, store } from '../Store'

import ScreenLoader from './ScreenLoader'

type Props = {
  children?: Node,
}

const StoreProvider = ({ children }: Props) => (
  <Provider store={store}>
    <PersistGate loading={<ScreenLoader />} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
)

export default StoreProvider
