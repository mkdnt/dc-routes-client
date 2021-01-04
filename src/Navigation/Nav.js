import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export class Nav extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link
            to="/route"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            _routes
          </Link>
        </li>

        <li>
          <Link
            to="/addNew"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            _add
          </Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
