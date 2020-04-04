import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit} method="POST" >
        <div class="form-group">
          <label>title</label>
          <input class="form-control" name="title" type="text" />
        </div>
        <div class="form-group">
          <label>content</label>
          <textarea class="form-control" name="content"> </textarea>
        </div>
        <div class="form-group">
          <input class="btn btn-success" value="save" type="submit" />
        </div>
      </form>
    )
  }
}

export default Form;