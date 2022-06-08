import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg"
        style={{ "minHeight": "70px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" >
            <h2 className="fs-2 fw-bold">S-M Dashboard</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
            
             <li className="nav-item pe-3">
                <Link className="nav-link" to="/dashboard">
                  {" "}
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
