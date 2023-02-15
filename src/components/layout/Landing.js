import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <main class="px-3">
        <h1>Cover your page.</h1>
        <p class="lead">
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </p>
        <p class="lead">
          <a
            href="#"
            class="btn btn-lg btn-light fw-bold border-white bg-white"
          >
            Learn more
          </a>
        </p>
      </main>
    );
  }
}
export default Landing;
