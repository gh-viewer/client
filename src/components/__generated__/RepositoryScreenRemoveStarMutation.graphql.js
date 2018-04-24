/**
 * @flow
 * @relayHash 11e6dc6cefd0f6649df1a06d955b59f3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RepositoryScreenRemoveStarMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    starrableId: string,
  },
|};
export type RepositoryScreenRemoveStarMutationResponse = {|
  +removeStar: ?{|
    +starrable: {|
      +stargazers: {|
        +totalCount: number,
      |},
      +viewerHasStarred: boolean,
    |},
  |},
|};
*/


/*
mutation RepositoryScreenRemoveStarMutation(
  $input: RemoveStarInput!
) {
  removeStar(input: $input) {
    starrable {
      __typename
      stargazers {
        totalCount
      }
      viewerHasStarred
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveStarInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "RemoveStarInput!"
  }
],
v2 = {
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
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "viewerHasStarred",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RepositoryScreenRemoveStarMutation",
  "id": null,
  "text": "mutation RepositoryScreenRemoveStarMutation(\n  $input: RemoveStarInput!\n) {\n  removeStar(input: $input) {\n    starrable {\n      __typename\n      stargazers {\n        totalCount\n      }\n      viewerHasStarred\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RepositoryScreenRemoveStarMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeStar",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveStarPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "starrable",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              v2,
              v3
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RepositoryScreenRemoveStarMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeStar",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveStarPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "starrable",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              },
              v2,
              v3,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
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
(node/*: any*/).hash = '2f9b6bcaf7d99544bfe7e506ca85183e';
module.exports = node;
