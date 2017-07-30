/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type HomeScreen_viewer = {|
  +repositories: {|
    +nodes: ?$ReadOnlyArray<?{|
      +id: string;
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HomeScreen_viewer",
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
      "storageKey": "repositories{\"first\":10,\"orderBy\":{\"direction\":\"DESC\",\"field\":\"UPDATED_AT\"}}"
    }
  ],
  "type": "User"
};

module.exports = fragment;
