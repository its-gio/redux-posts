import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(blob => blob.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return <div>Posts</div>;
  }
}

export default Posts;
