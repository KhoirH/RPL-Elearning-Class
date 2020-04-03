import React, { Component } from 'react';

class ComponentName extends Component{
  render() {
    return (
      <div>
        nama: 
        {this.props.nama}
        <br/>
        {this.props.children}
      </div>
    )
  }
}

export default ComponentName;