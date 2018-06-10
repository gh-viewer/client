// @flow

import { Environment, Network, RecordSource, Store } from 'relay-runtime'

import { store as reduxStore } from './Store'

export const create = (access_token: string) => {
  const fetchQuery = (operation: Object, variables?: Object) => {
    return fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        authorization: `bearer ${access_token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }).then(res => {
      if (res.ok) return res.json()
      else {
        if (res.status === 401) {
          reduxStore.dispatch({ type: 'AUTH_INVALID' })
        } else {
          const error: Object = new Error(res.statusText || 'Request error')
          error.status = res.status
          return Promise.reject(error)
        }
      }
    })
  }

  const network = Network.create(fetchQuery)
  const source = new RecordSource()
  const store = new Store(source)

  return new Environment({ network, store })
}
