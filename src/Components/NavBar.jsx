import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div >
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
          <Link className="navbar-brand" to="/">
            CRUD Operation
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/category/men clothing">
                    Men clothing
                  </Link>
                  <Link className="dropdown-item" to="/category/jewelery">
                    Jewelery
                  </Link>
                  <Link className="dropdown-item" to="/category/electronics">
                    Electronics
                  </Link>
                  <Link className="dropdown-item" to="/category/women clothing">
                    Women clothing
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-product">
                  Add New Product
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
