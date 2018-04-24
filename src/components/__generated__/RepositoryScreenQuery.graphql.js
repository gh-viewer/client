/**
 * @flow
 * @relayHash 3a3677aef0b93dd49ca0f528b5780663
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RepositoryScreen_repository$ref = any;
export type RepositoryScreenQueryVariables = {|
  id: string,
|};
export type RepositoryScreenQueryResponse = {|
  +repository: ?{|
    +$fragmentRefs: RepositoryScreen_repository$ref,
  |},
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "RepositoryScreenQuery",
  "id": null,
  "text": "query RepositoryScreenQuery(\n  $id: ID!\n) {\n  repository: node(id: $id) {\n    __typename\n    ...RepositoryScreen_repository\n    id\n  }\n}\n\nfragment RepositoryScreen_repository on Repository {\n  description\n  id\n  isFork\n  name\n  owner {\n    __typename\n    login\n    id\n  }\n  parent {\n    id\n    nameWithOwner\n  }\n  stargazers {\n    totalCount\n  }\n  viewerHasStarred\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RepositoryScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "repository",
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "RepositoryScreen_repository",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RepositoryScreenQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "repository",
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "InlineFragment",
            "type": "Repository",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "description",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isFork",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
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
                  v3
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "parent",
                "storageKey": null,
                "args": null,
                "concreteType": "Repository",
                "plural": false,
                "selections": [
                  v3,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "nameWithOwner",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "stargazers",
                "storageKey": null,
                "args": null,
                "concreteType": "StargazerConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "totalCount",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "viewerHasStarred",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'dbf316bbe39734addca20832de9c43ab';
module.exports = node;
