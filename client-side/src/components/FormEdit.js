import React, { Component } from 'react';

class FormEdit extends Component {
  render() {
    return (
      <form onSubmit={(e) => this.props.onSubmit(e, this.props.id)} method="POST" >
        <div class="form-group">
          <label>title</label>
          <input class="form-control" name="title" type="text" defaultValue={this.props.title}/>
        </div>
        <div class="form-group">
          <label>content</label>
          <textarea class="form-control" name="content">{this.props.content}</textarea>
        </div>
        <div class="form-group">
          <input class="btn btn-success" value="save" type="submit" />
        </div>
      </form>
    )
  }
}

export default FormEdit;