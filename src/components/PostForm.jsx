import React, { Component } from "react";

class PostForm extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>Add Post</h2>
        <form>
          <input type="text" name="newTitle" placeholder="Add Title" />
          <textarea name="newBody" placeholder="Add Text" cols="30" rows="10" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
