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

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <div>
        <h2>Add Post</h2>
        <form onSubmit={this.onSubmit}>
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
