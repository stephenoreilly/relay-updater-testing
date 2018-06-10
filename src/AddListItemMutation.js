import {
  commitMutation,
  graphql
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime';
import environment from './Environment'

const mutation = graphql`
  mutation AddListItemMutation{
    createListItem(input:{name: "test2", listId: "cji8jkab6896c0173740wnob9", clientMutationId:"23"}){
      listItem {
        name
        id
      }
    }
  }
`
export default () => {
  commitMutation(
    environment,
    {
      mutation,
      optimisticUpdater: store => {
        console.log("add item to list")
        const listId = "cji8jkab6896c0173740wnob9"
        const payload = store.getRootField("createListItem")
        // const list = payload.getLinkedRecord("listItem")

        const listRecord = store.get(listId);

        const conn2 = ConnectionHandler.getConnection(
          listRecord,
          // "client:viewer-fixed:__List_allLists_connection",
          'ListViewer_listItems', // This is the connection identifier, defined here: https://github.com/relayjs/relay-examples/blob/master/todo/js/components/TodoList.js#L68
        )
        console.log({conn2})


        // Create a Todo record in our store with a temporary ID
        const id = 'client:newListitem:' + Math.random(3);
        const node = store.create(id, 'ListItem');
        node.setValue("new name 456", 'name');
        node.setValue(id, 'id');

        // Create a new edge that contains the newly created Todo record
        const newEdge = store.create(
          'client:newEdge:' + Math.random(3),
          'ListItem',
        );
        newEdge.setLinkedRecord(node, 'node')

        ConnectionHandler.insertEdgeAfter(conn2, newEdge)
      },

      updater: store => {
        console.log("add item to list")
        const listId = "cji8jkab6896c0173740wnob9"
        const payload = store.getRootField("createListItem")
        const list = payload.getLinkedRecord("listItem")

        const listRecord = store.get(listId);

        const conn2 = ConnectionHandler.getConnection(
          listRecord,
          // "client:viewer-fixed:__List_allLists_connection",
          'ListViewer_listItems', // This is the connection identifier, defined here: https://github.com/relayjs/relay-examples/blob/master/todo/js/components/TodoList.js#L68
        )
        console.log({conn2})


        // Create a Todo record in our store with a temporary ID
        const id = 'client:newListitem:' + Math.random(3);
        const node = store.create(id, 'ListItem');
        node.setValue("new name 123", 'name');
        node.setValue(id, 'id');

        // Create a new edge that contains the newly created Todo record
        const newEdge = store.create(
          'client:newEdge:' + Math.random(3),
          'ListItem',
        );
        newEdge.setLinkedRecord(node, 'node')

        ConnectionHandler.insertEdgeAfter(conn2, newEdge)
      }
    },
  )
}