import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Navbar />

        </div>
      </div>
    );
  }
}
export default App;
