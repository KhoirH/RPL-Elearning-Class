import React, { Component } from 'react';

class ComponentContent extends Component{
  render() {
    return (
      <div>
        Gaji: 
        {this.props.konten}
      </div>
    )
  }
}

export default ComponentContent;