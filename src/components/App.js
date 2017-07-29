import React from 'react'

import EnvironmentProvider from './EnvironmentProvider'
import StoreProvider from './StoreProvider'
import HomeScreen from './HomeScreen'

const App = () =>
  <StoreProvider>
    <EnvironmentProvider>
      <HomeScreen />
    </EnvironmentProvider>
  </StoreProvider>

export default App
