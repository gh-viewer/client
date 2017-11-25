/**
 * @flow
 * @relayHash 3fe7efbe29e837863df42ae5f9295872
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RepositoryScreenRemoveStarMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    starrableId: string;
  };
|};
export type RepositoryScreenRemoveStarMutationResponse = {|
  +removeStar: ?{|
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RemoveStarInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryScreenRemoveStarMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "RemoveStarInput!"
          }
        ],
        "concreteType": "RemoveStarPayload",
        "name": "removeStar",
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
  "name": "RepositoryScreenRemoveStarMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RemoveStarInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "RepositoryScreenRemoveStarMutation",
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
            "type": "RemoveStarInput!"
          }
        ],
        "concreteType": "RemoveStarPayload",
        "name": "removeStar",
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
  "text": "mutation RepositoryScreenRemoveStarMutation(\n  $input: RemoveStarInput!\n) {\n  removeStar(input: $input) {\n    starrable {\n      __typename\n      stargazers {\n        totalCount\n      }\n      viewerHasStarred\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
