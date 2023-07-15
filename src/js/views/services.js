import React from "react";
import "../../styles/services.css";

export const Services = () => {
  const servicesList = [
    "Commercial/residential installation",
    "Water heater repair/installation",
    "Water/gas meter repair",
    "Bathroom/Kitchen Renovation",
    "Troubleshooting leaks/clogs"
  ];

  const partnersList = [
    "West Construction",
    "Renovation and Construction Services",
    "Servpro",
    "National Construction Services",
  ];

  const jobsList = [
    "Chocolate Nosh",
    "P.F. Changs",
    "Bricktown Comedy Club",
    "Breathe Birthing Center",
    "Youth Services Tulsa"
  ];

  return (
    <div className="services-container">
      <div className="services-list">
        <h2>List of Services</h2>
        <ul>
          {servicesList.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <div className="partners-list">
        <h2>Our Partners</h2>
        <ul>
          {partnersList.map((partner, index) => (
            <li key={index}>{partner}</li>
          ))}
        </ul>
      </div>
      <div className="jobs-list">
        <h2>Completed Jobs</h2>
        <ul>
          {jobsList.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>
      <div className="partners-imgs">
        <img src= "https://chocolatenosh.com/wp-content/uploads/2022/04/Chocolate-Nosh-No-Circle-Tagline-Logo-white_300.png"></img>
      </div>
    </div>
  );
};