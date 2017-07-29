// @flow

import PropTypes from 'prop-types'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'

export const EnvironmentPropType = PropTypes.instanceOf(Environment)

export const create = (access_token: string, onUnauthorized: () => void) => {
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
      else if (res.status === 401) {
        onUnauthorized()
      } else {
        const error: Object = new Error(res.statusText || 'Request error')
        error.status = res.status
        throw error
      }
    })
  }

  const network = Network.create(fetchQuery)
  const source = new RecordSource()
  const store = new Store(source)

  return new Environment({ network, store })
}
