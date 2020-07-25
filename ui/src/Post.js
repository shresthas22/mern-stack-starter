import React, { Component } from "react";
import axios from "axios";

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      post: "Not yet gotten",
    };
  }

  handleButtonClick = () => {
    axios.get("/posts").then((response) => {
      this.setState({
        post: response.data["0"].title,
      });
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Show</button>
        <h1>The post says: {this.state.post}</h1>
      </div>
    );
  }
}
