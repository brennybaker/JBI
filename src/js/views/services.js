import React from "react";
import "../../styles/services.css";

export const Services = () => {
    const myList = [
      "Commercial/residential installation",
      "Water heater repair/installtion",
      "Water/gas meter repair",
      "Bathroom/Kitchen Renovation",
      "Troubleshooting leaks/clogs"
    ];
  
    return (
      <div className="postcard-container">
        <div>
          <img
            className="services-image"
            src="https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="Services Background"
          />
        </div>
        <div className="postcard">
          <div className="postcard-header">
            <h2>List of Services</h2>
          </div>
          <div className="postcard-content">
            <ul className="postcard-list">
              {myList.map((item, index) => (
                <li className="postcard-list-item" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };