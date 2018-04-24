/**
 * @flow
 * @relayHash 142f8297eaa1c52f7d9d81ed49fad29a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomeScreen_viewer$ref = any;
export type HomeScreenQueryVariables = {|
  count: number,
  cursor?: ?string,
|};
export type HomeScreenQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: HomeScreen_viewer$ref,
  |},
|};
*/


/*
query HomeScreenQuery(
  $count: Int!
  $cursor: String
) {
  viewer {
    ...HomeScreen_viewer
    id
  }
}

fragment HomeScreen_viewer on User {
  repositories(after: $cursor, first: $count, orderBy: {field: UPDATED_AT, direction: DESC}) {
    edges {
      node {
        ...HomeScreen_repository
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HomeScreenQuery",
  "id": null,
  "text": "query HomeScreenQuery(\n  $count: Int!\n  $cursor: String\n) {\n  viewer {\n    ...HomeScreen_viewer\n    id\n  }\n}\n\nfragment HomeScreen_viewer on User {\n  repositories(after: $cursor, first: $count, orderBy: {field: UPDATED_AT, direction: DESC}) {\n    edges {\n      node {\n        ...HomeScreen_repository\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment HomeScreen_repository on Repository {\n  id\n  name\n  nameWithOwner\n  owner {\n    __typename\n    login\n    ... on User {\n      isViewer\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HomeScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "HomeScreen_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeScreenQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "repositories",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "after",
                "variableName": "cursor",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "count",
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": {
                  "direction": "DESC",
                  "field": "UPDATED_AT"
                },
                "type": "RepositoryOrder"
              }
            ],
            "concreteType": "RepositoryConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "RepositoryEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Repository",
                    "plural": false,
                    "selections": [
                      v1,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "nameWithOwner",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "owner",
                        "storageKey": null,
                        "args": null,
                        "concreteType": null,
                        "plural": false,
                        "selections": [
                          v2,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "login",
                            "args": null,
                            "storageKey": null
                          },
                          v1,
                          {
                            "kind": "InlineFragment",
                            "type": "User",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "isViewer",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          }
                        ]
                      },
                      v2
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "repositories",
            "args": [
              {
                "kind": "Variable",
                "name": "after",
                "variableName": "cursor",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "count",
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": {
                  "direction": "DESC",
                  "field": "UPDATED_AT"
                },
                "type": "RepositoryOrder"
              }
            ],
            "handle": "connection",
            "key": "HomeScreen_repositories",
            "filters": [
              "orderBy"
            ]
          },
          v1
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'a7951b4be4b420e24e4c4969bb2e63b4';
module.exports = node;
