import React, { Component } from 'react';

class ComponentContent extends Component{
  render() {
    return (
      <div>
        Konten: 
        {this.props.konten}
      </div>
    )
  }
}

export default ComponentContent;