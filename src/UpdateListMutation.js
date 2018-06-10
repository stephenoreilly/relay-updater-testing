import {
  commitMutation,
  graphql
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime';
import environment from './Environment'

const mutation = graphql`
  mutation UpdateListMutation {
    updateList(input:{id: "cji8jkab6896c0173740wnob9", name: "test3", clientMutationId:"2123"}){
      list {
        id
        name
      }
    }
  }
`
export default () => {
  commitMutation(
    environment,
    {
      mutation,

      updater: store => {
        const payload = store.getRootField("updateList")
        const list = payload.getLinkedRecord("list")

        const conn1 = ConnectionHandler.getConnection(
          list,
          'List_allLists', // This is the connection identifier, defined here: https://github.com/relayjs/relay-examples/blob/master/todo/js/components/TodoList.js#L68
        )

        const conn2 = ConnectionHandler.getConnection(
          store.getRoot(),
          'List_allLists', // This is the connection identifier, defined here: https://github.com/relayjs/relay-examples/blob/master/todo/js/components/TodoList.js#L68
        )

        const listRecord = store.get(list.getValue("id"));
        listRecord.setValue("test1234", "name")
        console.log({listRecord})
      }
    },
  )
}