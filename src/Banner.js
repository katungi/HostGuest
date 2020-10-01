import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from 'react-router-dom'

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          variant="outlined"
          className="banner__searchButton"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "hide" : "search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>We are a sum of our experiences</h1>
        <h5>
          Choose an adventure and take a tour on our wide range of experiences
        </h5>
        <Button onClick={()=> history.push('/search')}variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}


export default Banner;
