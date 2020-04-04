import React, { Component } from 'react';


class Items extends Component {
  render() {
    return (
      <div class="card p-3">
        <h4>{this.props.title}</h4>
        <p>{this.props.content}</p>
        <div class="d-flex row">
          <form method="POST">
            <input
              class="btn btn-danger"
              value="Delete"
              type="submit" />
          </form>
          <a class="btn btn-info">
            Edit
          </a>
        </div>
      </div>
    )
  }
}

export default  Items;