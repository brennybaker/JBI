import React from "react";
import "../../styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => (
  <div className="postcard-container">
    <div className="contact">
      <div className="contact-items-container">
        <div className="contact-item-1">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#0f0f0f", fontSize: "50px" }}
          />
          <p>thejbiplumbing@gmail.com</p>
        </div>
        <div className="contact-item-2">
          <FontAwesomeIcon
            icon={faPhone}
            style={{ color: "#0c0d0d", fontSize: "50px" }}
          />
          <p>918-207-5611</p>
        </div>
      </div>
      <div className="contact-item-3">
        <img src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Contact" />
      </div>
    </div>
    <div className="postcard">
      <div className="postcard-header">
        <h2>Reach out now to schedule a free estimate!</h2>
      </div>
      <div className="postcard-content">
        <p className="postcard-label">Name:</p>
        <input
          type="text"
          maxLength="50"
          placeholder="Your Name"
          className="postcard-input"
        />
        <p className="postcard-label">Number:</p>
        <input
          type="text"
          maxLength="50"
          placeholder="Your Phone Number"
          className="postcard-input"
        />
        <p className="postcard-label">Email:</p>
        <input
          type="text"
          maxLength="50"
          placeholder="Your Email"
          className="postcard-input"
        />
        <p className="postcard-label">Service Address:</p>
        <input
          type="text"
          maxLength="50"
          placeholder="Where is the need located?"
          className="postcard-input"
        />
        <p className="postcard-label">Service Needs:</p>
        <input
          type="text"
          maxLength="250"
          placeholder="What services are needed?"
          className="postcard-input"
        />
        <button className="btn btn-primary postcard-submit">Submit</button>
      </div>
    </div>
  </div>
);