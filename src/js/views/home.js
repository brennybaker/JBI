import React from "react";
import "../../styles/home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Home = () => (
  <div className="home-container">
    <div className="slideshow-container">
    <div className="home-content">
      <h1 className="home-title">Welcome!</h1><p className="home-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
      <div className="slides-wrapper">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          <div>
            <img
              className="home-image"
              src="https://cdn.pixabay.com/photo/2015/11/12/01/29/copper-1039483_1280.jpg"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              className="home-image"
              src="https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_1280.jpg"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              className="home-image"
              src="https://cdn.pixabay.com/photo/2016/04/20/01/27/plumbing-1340243_1280.jpg"
              alt="Slide 3"
            />
          </div>
        </Carousel>
      </div>
    </div>
   
  </div>
);