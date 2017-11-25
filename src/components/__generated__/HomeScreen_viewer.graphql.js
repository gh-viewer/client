/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type HomeScreen_viewer = {|
  +repositories: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string;
      |};
    |}>;
    +pageInfo: {|
      +endCursor: ?string;
      +hasNextPage: boolean;
    |};
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "cursor",
      "type": "String"
    },
    {
      "kind": "RootArgument",
      "name": "count",
      "type": "Int"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "repositories"
        ]
      }
    ]
  },
  "name": "HomeScreen_viewer",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "repositories",
      "args": [
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
      "name": "__HomeScreen_repositories_connection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "RepositoryEdge",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "Repository",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "HomeScreen_repository",
                  "args": null
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
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "endCursor",
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "type": "RepositoryConnection",
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "RepositoryEdge",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "cursor",
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": null,
                  "concreteType": "Repository",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "__typename",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ]
        }
      ],
      "storageKey": "__HomeScreen_repositories_connection{\"orderBy\":{\"direction\":\"DESC\",\"field\":\"UPDATED_AT\"}}"
    }
  ],
  "type": "User"
};

module.exports = fragment;
