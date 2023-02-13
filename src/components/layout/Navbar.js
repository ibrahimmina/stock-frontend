import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <header class="mb-auto">
      <div>
        <h3 class="float-md-start mb-0">Cover</h3>
        <nav class="nav nav-masthead justify-content-center float-md-end">
          <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
          <a class="nav-link fw-bold py-1 px-0" href="/register">Register</a>
          <a class="nav-link fw-bold py-1 px-0" href="/login">Login</a>
        </nav>
      </div>
    </header>
    );
  }
}
export default Navbar;