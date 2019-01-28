import React, { Component } from "react";

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  changeText = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2>Add Post</h2>
        <form>
          <input
            type="text"
            name="title"
            placeholder="Add Title"
            value={this.state.title}
            onChange={this.changeText}
          />
          <textarea
            name="body"
            placeholder="Add Text"
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.changeText}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
