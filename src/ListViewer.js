import React, { Component } from 'react'
import environment from './Environment.js'
import AddListItemMutation from './AddListItemMutation.js'
import { QueryRenderer, graphql } from 'react-relay'

import ListItem from "./ListItem.js"
import logo from './logo.svg';
import './App.css';

export default class ListViewer extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ListViewerQuery {
            node(id: "cji8jkab6896c0173740wnob9"){
              ...on List
              {
                name
                id
                __typename
                listItems(last: 5) @connection(key: "ListViewer_listItems"){
                  edges{
                    node{
                      name
                    }
                  }
                }
              }
            }
          }
        `}
        variables={{
          pageID: 'cji8jl47689ap0173swypkejq',
        }}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            console.log({props})
            return (
              <div
                onClick={() => {
                  console.log("mutate")
                  AddListItemMutation()
                }}
              >
                <div>{props.node.id}</div>
                <div>{props.node.name}</div>
                <h3>List Items</h3>
                {props.node.listItems.edges.map((lI) => <div>{lI.node.name}</div>)}
              </div>
            )
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}