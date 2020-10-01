import React from "react";
import "./Header.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { pink } from "@material-ui/core/colors";
import LanguageRoundedIcon from "@material-ui/icons/LanguageRounded";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://hostguest.co.ke/wp-content/uploads/2018/12/hostguest-logo-2-300x87.png"
          alt="HostGuest"
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchRoundedIcon style={{ color: pink[300] }} />
      </div>

      <div className="header__right">
        <p>Become a Host</p>
        <LanguageRoundedIcon style={{ color: pink[300] }} />
        <ExpandMoreRoundedIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
