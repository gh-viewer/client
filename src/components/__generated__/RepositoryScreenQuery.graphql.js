/**
 * @flow
 * @relayHash 42df4b01583ff2a56a467fb14b27afa5
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RepositoryScreenQueryResponse = {|
  +repository: ?{| |};
|};
*/


/*
query RepositoryScreenQuery(
  $id: ID!
) {
  repository: node(id: $id) {
    __typename
    ...RepositoryScreen_repository
    id
  }
}

fragment RepositoryScreen_repository on Repository {
  description
  id
  isFork
  name
  owner {
    __typename
    login
    id
  }
  parent {
    id
    nameWithOwner
  }
  stargazers {
    totalCount
  }
  viewerHasStarred
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryScreenQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "repository",
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": null,
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "RepositoryScreen_repository",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "RepositoryScreenQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "RepositoryScreenQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "repository",
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": null,
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Repository",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "isFork",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": null,
                "name": "owner",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "login",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "name": "parent",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "nameWithOwner",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "StargazerConnection",
                "name": "stargazers",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "totalCount",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "viewerHasStarred",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query RepositoryScreenQuery(\n  $id: ID!\n) {\n  repository: node(id: $id) {\n    __typename\n    ...RepositoryScreen_repository\n    id\n  }\n}\n\nfragment RepositoryScreen_repository on Repository {\n  description\n  id\n  isFork\n  name\n  owner {\n    __typename\n    login\n    id\n  }\n  parent {\n    id\n    nameWithOwner\n  }\n  stargazers {\n    totalCount\n  }\n  viewerHasStarred\n}\n"
};

module.exports = batch;
