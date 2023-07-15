import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{maxHeight:"6rem",width:"100%"}}>
      <Link to="/">
        <img className="logo-image" src="https://i.imgur.com/q4TgNBi.png" alt="Logo" style={{maxHeight:"5rem"}}/>
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/Services" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};