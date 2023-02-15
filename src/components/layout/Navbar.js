import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">Cover</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <Link
              to="/"
              className="nav-link fw-bold py-1 px-0 active"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              to="/register"
              className="nav-link fw-bold py-1 px-0 active"
              aria-current="page"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="nav-link fw-bold py-1 px-0 active"
              aria-current="page"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}
export default Navbar;
