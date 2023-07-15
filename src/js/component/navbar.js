import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{ maxHeight: "6rem", width: "100%" }}>
      <Link to="/">
        <img className="logo-image" src="https://i.imgur.com/q4TgNBi.png" alt="Logo" style={{ maxHeight: "5rem" }} />
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
          <li className="nav-item">
            <a href="https://www.facebook.com/profile.php?id=100067550838784" className="nav-link">
              <FontAwesomeIcon icon={faSquareFacebook} style={{ color: "#2b65ca" }} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};