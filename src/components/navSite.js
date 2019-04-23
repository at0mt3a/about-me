import React, { Component } from "react";
import "./navSite.css";
import { Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">home</Link>
        <Link to="/work-history">work history</Link>
      </nav>
    );
  }
}

export default Nav;
