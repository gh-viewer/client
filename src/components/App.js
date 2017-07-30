import React from 'react'

import EnvironmentProvider from './EnvironmentProvider'
import StoreProvider from './StoreProvider'
import Navigation from './Navigation'

const App = () =>
  <StoreProvider>
    <EnvironmentProvider>
      <Navigation />
    </EnvironmentProvider>
  </StoreProvider>

export default App
