import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Navbar />
          <main class="px-3">
            <h1>Cover your page.</h1>
            <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <p class="lead">
              <a href="#" class="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
            </p>
          </main>
        </div>
      </div>
    );
  }
}
export default App;
