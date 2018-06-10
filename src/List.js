import React, { Component } from 'react'
import environment from './Environment.js'
import UpdateListMutation from './UpdateListMutation.js'
import { QueryRenderer, graphql } from 'react-relay'

import ListItem from "./ListItem.js"
import logo from './logo.svg';
import './App.css';

export default class List extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ListQuery {
            viewer{
              id
              allLists(first: 1) @connection(key: "List_allLists"){
                edges {
                  node   {
                    id
                    name
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
                  UpdateListMutation()
                }}
              >
                <div>{props.viewer.allLists.edges[0].node.id}</div>
                <div>{props.viewer.allLists.edges[0].node.name}</div>
              </div>
            )
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}