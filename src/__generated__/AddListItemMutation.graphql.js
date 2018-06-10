/**
 * @flow
 * @relayHash 22a36f5be89ac4e3e22dbafdb21da24d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddListItemMutationVariables = {||};
export type AddListItemMutationResponse = {|
  +createListItem: ?{|
    +listItem: ?{|
      +name: string,
      +id: string,
    |}
  |}
|};
*/


/*
mutation AddListItemMutation {
  createListItem(input: {name: "test2", listId: "cji8jkab6896c0173740wnob9", clientMutationId: "23"}) {
    listItem {
      name
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createListItem",
    "storageKey": "createListItem(input:{\"clientMutationId\":\"23\",\"listId\":\"cji8jkab6896c0173740wnob9\",\"name\":\"test2\"})",
    "args": [
      {
        "kind": "Literal",
        "name": "input",
        "value": {
          "clientMutationId": "23",
          "listId": "cji8jkab6896c0173740wnob9",
          "name": "test2"
        },
        "type": "CreateListItemInput!"
      }
    ],
    "concreteType": "CreateListItemPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "listItem",
        "storageKey": null,
        "args": null,
        "concreteType": "ListItem",
        "plural": false,
        "selections": [
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
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AddListItemMutation",
  "id": null,
  "text": "mutation AddListItemMutation {\n  createListItem(input: {name: \"test2\", listId: \"cji8jkab6896c0173740wnob9\", clientMutationId: \"23\"}) {\n    listItem {\n      name\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddListItemMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "AddListItemMutation",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9c96d7ac093b6b1c0df19c767848a8bf';
module.exports = node;
