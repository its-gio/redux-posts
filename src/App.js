import React, { Component } from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForms";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Post Practice</h1>
        <PostForm />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
