// @flow

import { AsyncStorage } from 'react-native'
import { combineReducers, createStore } from 'redux'
import { createPersistor, getStoredState } from 'redux-persist'

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

const persistConfig = { storage: AsyncStorage }

const getInitialState = (): Promise<Object> => {
  return new Promise(resolve => {
    getStoredState(persistConfig, (err, state) => {
      if (err) {
        console.warn('Failed to get stored state', err)
        resolve({})
      } else {
        resolve(state)
      }
    })
  })
}

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

const reducer = combineReducers({ auth: authReducer })

export const create = async () => {
  const store = createStore(reducer, await getInitialState())
  createPersistor(store, persistConfig)
  return store
}
