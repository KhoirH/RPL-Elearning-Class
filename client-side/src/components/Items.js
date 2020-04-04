import React, { Component } from 'react';


class Items extends Component {
  render() {
    return (
      <div class="card p-3">
        <h4>{this.props.title}</h4>
        <p>{this.props.content}</p>
        <div class="d-flex row">
          <a
            class="btn btn-danger"
            onClick={(e) => this.props.onDeleted(e, this.props.id)}>
            Delete
          </a>
        
          <a
            class="btn btn-info"
            onClick={(e) => this.props.onSelected(e, this.props.index)}>
            Edit
          </a>
        </div>
      </div>
    )
  }
}

export default  Items;