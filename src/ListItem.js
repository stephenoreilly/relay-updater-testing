import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        {this.props.name}
      </div>
    );
  }
}

export default ListItem;
