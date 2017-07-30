/**
 * @flow
 * @relayHash 651068836c840c546bcb0cb1127476e5
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type HomeScreenQueryResponse = {|
  +viewer: {| |};
|};
*/


/*
query HomeScreenQuery {
  viewer {
    ...HomeScreen_viewer
    id
  }
}

fragment HomeScreen_viewer on User {
  repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
    nodes {
      ...HomeScreen_repository
      id
    }
  }
}

fragment HomeScreen_repository on Repository {
  id
  name
  nameWithOwner
  owner {
    __typename
    login
    ... on User {
      isViewer
    }
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeScreenQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "HomeScreen_viewer",
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
  "name": "HomeScreenQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "HomeScreenQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
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
            "kind": "InlineFragment",
            "type": "User",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10,
                    "type": "Int"
                  },
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": {
                      "field": "UPDATED_AT",
                      "direction": "DESC"
                    },
                    "type": "RepositoryOrder"
                  }
                ],
                "concreteType": "RepositoryConnection",
                "name": "repositories",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Repository",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
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
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "nameWithOwner",
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
                              },
                              {
                                "kind": "InlineFragment",
                                "type": "User",
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "isViewer",
                                    "storageKey": null
                                  }
                                ]
                              }
                            ],
                            "storageKey": null
                          }
                        ]
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "repositories{\"first\":10,\"orderBy\":{\"direction\":\"DESC\",\"field\":\"UPDATED_AT\"}}"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query HomeScreenQuery {\n  viewer {\n    ...HomeScreen_viewer\n    id\n  }\n}\n\nfragment HomeScreen_viewer on User {\n  repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {\n    nodes {\n      ...HomeScreen_repository\n      id\n    }\n  }\n}\n\nfragment HomeScreen_repository on Repository {\n  id\n  name\n  nameWithOwner\n  owner {\n    __typename\n    login\n    ... on User {\n      isViewer\n    }\n    id\n  }\n}\n"
};

module.exports = batch;
