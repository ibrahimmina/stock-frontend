import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <footer className="mt-auto text-white-50">
        <p>
          Cover template for{" "}
          <a href="https://getbootstrap.com/" className="text-white">
            Bootstrap
          </a>
          , by{" "}
          <a href="https://twitter.com/mdo" className="text-white">
            @mdo
          </a>
          .
        </p>
      </footer>
    );
  }
}
export default Footer;
