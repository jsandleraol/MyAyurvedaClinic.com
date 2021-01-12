import React, {useState} from "react";
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../resources/Ayurveda_Health_Logo.png"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from "@material-ui/core/Badge";
import { useLocation } from 'react-router-dom';
import SearchBar from "../reusable/searchBar/searchBar";
import Menu from './menu'


const NavBar = () => {
  const [isLoggedIn] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname.search("results") > -1

  let BadgeCSS = {
    margin: '0 2vw 0 0',
  }

  let ShoppingCartIconCSS = {
    margin: '0 0 0 1vw',
    width: '3vw',
    height: '3vw',
    maxHeight: '25px',
    maxWidth: '25px',
  }

  return (
    <div>
      <div className="empty-top-space"></div>
      <div className="navbar-container">
        <Menu />
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="logo" className="cover-image" />
          </Link>
        </div>
        {currentPath ? <SearchBar displaySmall={true} /> : null}
        <div className="navbar-links-container">
          <Link to="/products" className="navbar-links">Products</Link>
          <Link to="/massages" className="navbar-links">Massages</Link>
          <Link to="/classes" className="navbar-links">Online Classes</Link>
          <Link to="/join" className="navbar-links">Join</Link>
          {isLoggedIn ?
            <div className="navbar-links"> Welcome, Jonathan </div>
            : <Link to="/login" className="navbar-links"> Welcome, Sign in </Link>}
        </div>
        <Badge color="secondary" badgeContent="1" style={BadgeCSS}>
          <ShoppingCartIcon style={ShoppingCartIconCSS} />
        </Badge>
      </div>
    </div>
  )
}


export default NavBar;