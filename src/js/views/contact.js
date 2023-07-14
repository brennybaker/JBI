import React from "react";
import "../../styles/contact.css";

export const Contact = () => (
  <div className="postcard-container">
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