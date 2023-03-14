import React from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-navbar">
        <Link className="navbar-brand" href="#">
          <h3>&nbsp;&nbsp;&nbsp;Poke API</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="#">
                Daftar Pokemon
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Daftar Pokemon Saya
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}