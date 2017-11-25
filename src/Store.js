// @flow

import { AsyncStorage } from 'react-native'
import { createStore } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'

export type Action =
  | {
      type: 'AUTH_INVALID',
    }
  | {
      type: 'AUTH_SUCCESS',
      auth: {
        access_token: string,
        scope?: string,
      },
    }

const persistConfig = { key: 'ghv', storage: AsyncStorage }

const authReducer = (state = null, action: Action) => {
  switch (action.type) {
    case 'AUTH_INVALID':
      return null
    case 'AUTH_SUCCESS':
      return action.auth
    default:
      return state
  }
}

const reducer = persistCombineReducers(persistConfig, { auth: authReducer })

export const store = createStore(reducer)

export const persistor = persistStore(store)
