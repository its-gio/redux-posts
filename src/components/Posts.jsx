import React, { Component } from "react";

class Posts extends Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(blob => blob.json())
      .then(posts => console.log(posts));
  }

  render() {
    return <div>Posts</div>;
  }
}

export default Posts;
