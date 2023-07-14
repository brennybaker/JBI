import React from 'react';
import "../../styles/about.css";

export const About = () => {
    return (
      <div>
        <div className="about-container">
          <div className="about-image">
            <img src="https://i.imgur.com/IFWaNZi.jpg" alt="About Us" />
          </div>
          <div className="postcard-container">
            <div className="postcard">
              <div className="postcard-header">
                <h1>About Us</h1>
              </div>
              <div className="postcard-content">
                <p>
                  Welcome to JBI Plumbing, where expertise meets reliability. With a foundation built in 2009,
                  our company is backed by the extensive experience of our founder, Joel Baker, who has been
                  providing top-notch construction services for over 30 years. At JBI Plumbing, we take pride in
                  our commitment to quality workmanship and customer satisfaction. As a licensed, bonded, and
                  insured plumbing company, we ensure that every project is handled with the utmost attention to
                  detail. While our primary focus lies in commercial plumbing services, collaborating with contracting
                  firms in Tulsa, OK, we also bring our expertise to the realm of home maintenance and repairs.
                  Whether it's a commercial plumbing installation, repair/maintenance, or a residential plumbing issue,
                  you can trust JBI Plumbing to deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };