import React from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";

function Banner() {
  return (
    <div className="banner">
        <div className="banner__search">
            <Button variant="outlined" className="banner__searchButton">Search Dates</Button>
             
        </div>
      <div className="banner__info">
        <h1>We are a sum of our experiences</h1>
        <h5>
          Choose an adventure and take a tour on our wide range of experiences
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
