/**
 * @flow
 * @relayHash 2e9d9ec51e5858751efafd094b7bdbcf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateListMutationVariables = {||};
export type UpdateListMutationResponse = {|
  +updateList: ?{|
    +list: ?{|
      +id: string,
      +name: string,
    |}
  |}
|};
*/


/*
mutation UpdateListMutation {
  updateList(input: {id: "cji8jkab6896c0173740wnob9", name: "test3", clientMutationId: "2123"}) {
    list {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateList",
    "storageKey": "updateList(input:{\"clientMutationId\":\"2123\",\"id\":\"cji8jkab6896c0173740wnob9\",\"name\":\"test3\"})",
    "args": [
      {
        "kind": "Literal",
        "name": "input",
        "value": {
          "clientMutationId": "2123",
          "id": "cji8jkab6896c0173740wnob9",
          "name": "test3"
        },
        "type": "UpdateListInput!"
      }
    ],
    "concreteType": "UpdateListPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "list",
        "storageKey": null,
        "args": null,
        "concreteType": "List",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
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
  "name": "UpdateListMutation",
  "id": null,
  "text": "mutation UpdateListMutation {\n  updateList(input: {id: \"cji8jkab6896c0173740wnob9\", name: \"test3\", clientMutationId: \"2123\"}) {\n    list {\n      id\n      name\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateListMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateListMutation",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f3ca0ae45a3cb42c48e39eef65b146f4';
module.exports = node;
