/**
 * @flow
 * @relayHash cb1c269755d5000b7bbe9ad7a010c8fd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListViewerQueryVariables = {||};
export type ListViewerQueryResponse = {|
  +node: ?({|
    +name: string,
    +id: string,
    +__typename: "List",
    +listItems: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: {|
          +name: string
        |}
      |}>
    |},
  |} | {|
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    +__typename: "%other"
  |})
|};
*/


/*
query ListViewerQuery {
  node(id: "cji8jkab6896c0173740wnob9") {
    __typename
    ... on List {
      name
      id
      __typename
      listItems(last: 5) {
        edges {
          node {
            name
            id
            __typename
          }
          cursor
        }
        pageInfo {
          hasPreviousPage
          startCursor
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "cji8jkab6896c0173740wnob9",
    "type": "ID!"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v5 = {
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
      "name": "hasPreviousPage",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "startCursor",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ListViewerQuery",
  "id": null,
  "text": "query ListViewerQuery {\n  node(id: \"cji8jkab6896c0173740wnob9\") {\n    __typename\n    ... on List {\n      name\n      id\n      __typename\n      listItems(last: 5) {\n        edges {\n          node {\n            name\n            id\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          hasPreviousPage\n          startCursor\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "node",
          "listItems"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "ListViewerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": "node(id:\"cji8jkab6896c0173740wnob9\")",
        "args": v0,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "List",
            "selections": [
              v1,
              v2,
              v3,
              {
                "kind": "LinkedField",
                "alias": "listItems",
                "name": "__ListViewer_listItems_connection",
                "storageKey": null,
                "args": null,
                "concreteType": "ListItemConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ListItemEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ListItem",
                        "plural": false,
                        "selections": [
                          v1,
                          v3
                        ]
                      },
                      v4
                    ]
                  },
                  v5
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ListViewerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": "node(id:\"cji8jkab6896c0173740wnob9\")",
        "args": v0,
        "concreteType": null,
        "plural": false,
        "selections": [
          v3,
          v2,
          {
            "kind": "InlineFragment",
            "type": "List",
            "selections": [
              v1,
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "listItems",
                "storageKey": "listItems(last:5)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 5,
                    "type": "Int"
                  }
                ],
                "concreteType": "ListItemConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ListItemEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ListItem",
                        "plural": false,
                        "selections": [
                          v1,
                          v2,
                          v3
                        ]
                      },
                      v4
                    ]
                  },
                  v5
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "listItems",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 5,
                    "type": "Int"
                  }
                ],
                "handle": "connection",
                "key": "ListViewer_listItems",
                "filters": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '96a20aac47ee35c54d760029dad80962';
module.exports = node;
