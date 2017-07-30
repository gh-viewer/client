/**
 * @flow
 * @relayHash d53e829c7bcdfea2dfc7973d11203b5a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RepositoryScreenAddStarMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    starrableId: string;
  };
|};

export type RepositoryScreenAddStarMutationResponse = {|
  +addStar: ?{|
    +starrable: {|
      +stargazers: {|
        +totalCount: number;
      |};
      +viewerHasStarred: boolean;
    |};
  |};
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddStarInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryScreenAddStarMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddStarInput!"
          }
        ],
        "concreteType": "AddStarPayload",
        "name": "addStar",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": null,
            "name": "starrable",
            "plural": false,
            "selections": [
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "RepositoryScreenAddStarMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddStarInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "RepositoryScreenAddStarMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddStarInput!"
          }
        ],
        "concreteType": "AddStarPayload",
        "name": "addStar",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": null,
            "name": "starrable",
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation RepositoryScreenAddStarMutation(\n  $input: AddStarInput!\n) {\n  addStar(input: $input) {\n    starrable {\n      __typename\n      stargazers {\n        totalCount\n      }\n      viewerHasStarred\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
