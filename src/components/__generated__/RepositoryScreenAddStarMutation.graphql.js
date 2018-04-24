/**
 * @flow
 * @relayHash b150cf5f209638fb18a93d1c67116c7e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RepositoryScreenAddStarMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    starrableId: string,
  },
|};
export type RepositoryScreenAddStarMutationResponse = {|
  +addStar: ?{|
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
mutation RepositoryScreenAddStarMutation(
  $input: AddStarInput!
) {
  addStar(input: $input) {
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
    "type": "AddStarInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddStarInput!"
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
  "name": "RepositoryScreenAddStarMutation",
  "id": null,
  "text": "mutation RepositoryScreenAddStarMutation(\n  $input: AddStarInput!\n) {\n  addStar(input: $input) {\n    starrable {\n      __typename\n      stargazers {\n        totalCount\n      }\n      viewerHasStarred\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RepositoryScreenAddStarMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addStar",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddStarPayload",
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
    "name": "RepositoryScreenAddStarMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addStar",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddStarPayload",
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
(node/*: any*/).hash = '4440c413e2a2ee4cb7b440a3af764f65';
module.exports = node;
