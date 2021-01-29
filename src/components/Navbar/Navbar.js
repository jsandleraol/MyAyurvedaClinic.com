import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../resources/Ayurveda_Health_Logo.png"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from "@material-ui/core/Badge";
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchBar from "../reusable/searchBar/searchBar";
import Menu from './menu'
// import Login from '../reusable/login'


const NavBar = ({ updateRef }) => {
  const isLoggedIn = useSelector(state => state.user.login);
  const userName = useSelector(state => state.user.name);
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
    minHeight: '20px',
    minWidth: '20px',
  }

  return (
    <div>
      <div className="empty-top-space"></div>
      <div className="navbar-container">
        <Menu updateRef={() => updateRef()}/>
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="logo" className="cover-image" />
          </Link>
        </div>
        {currentPath ? <SearchBar displaySmall={true} /> : null}
        <div className="navbar-links-container">
          <Link to="/products" className="navbar-links">Products</Link>
          {/* <Link to="/massages" className="navbar-links">Massages</Link> */}
          {/* <Link to="/classes" className="navbar-links">Online Classes</Link> */}
          <Link to="/join" className="navbar-links">Join</Link>
          {isLoggedIn ?
            <div
              className="navbar-links"
              onClick={() => updateRef()}
            > Welcome, {userName} </div>
            : <div
              onClick={() => updateRef()}
              className="navbar-links"
            > Welcome, Sign in
            </div>
          }
        </div>
        <Badge color="secondary" badgeContent="1" style={BadgeCSS}>
          <ShoppingCartIcon style={ShoppingCartIconCSS} />
        </Badge>
      </div>
      <div>
      </div>
    </div>
  )
}


export default NavBar;