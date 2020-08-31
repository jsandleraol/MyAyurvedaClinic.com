import React, { useState, useEffect } from "../../../node_modules/react";
import { Link } from "../../../node_modules/react-router-dom";
import { slide as Menu } from "../../../node_modules/react-burger-menu/lib/BurgerMenu";
import Logo from "../../resources/Ayurveda_Health_Logo.png"
import NavigateNextIcon from '../../../node_modules/@material-ui/icons/NavigateNext';
import ExitToAppIcon from '../../../node_modules/@material-ui/icons/ExitToApp';
import Badge from "../../../node_modules/@material-ui/core/Badge";
import ShoppingCartIcon from '../../../node_modules/@material-ui/icons/ShoppingCart';
import { useLocation } from 'react-router-dom';
import SearchBar from "../reusable/searchBar"


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn] = useState(true);
  const [currentPath, setCurrentPath] = useState('');



  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);
  console.log("currentPath", currentPath)

 

  // const toggleMenu = () => {
  //     setMenuOpen(!menuOpen);
  //   };

  const stateChangeHandler = (newState) => {
    setMenuOpen(newState.isOpen);
    // setTimeout(() => {
    //   if (newState.isOpen) {
    //     document.activeElement.onBlur();
    //   })
  };

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
        <Menu
          isOpen={menuOpen}
          onStateChange={(state) => stateChangeHandler(state)}>
          {isLoggedIn ?
            <div className="welcome-text-menu"> Welcome, Jonathan </div>
            :
            <Link to="/login" className="welcome-text-menu"><div className="bm-item-text"> Welcome,  log in <ExitToAppIcon /></div></Link>}
          <Link to="/account" ><div className="bm-item-text">Your Account <NavigateNextIcon /></div></Link>
          <Link to="/profile"><div className="bm-item-text">Your Profile<NavigateNextIcon /></div></Link>
          <Link to="/appointments"><div className="bm-item-text">Your Appointments<NavigateNextIcon /></div></Link>
          <Link to="/orders"><div className="bm-item-text">Your Orders & Returns<NavigateNextIcon /></div></Link>
          <div className="separator"></div>
          <Link to="/testimonials" ><div className="bm-item-text">Testimonials<NavigateNextIcon /></div></Link>
          <Link to="/endorsements" ><div className="bm-item-text">Endorsements<NavigateNextIcon /></div></Link>
          <Link to="/media" ><div className="bm-item-text">Ayurveda in the media<NavigateNextIcon /></div></Link>
          <Link to="/research" ><div className="bm-item-text">Researches<NavigateNextIcon /></div></Link>
          <div className="separator"></div>
          <Link to="/what-is-ayurveda" ><div className="bm-item-text">What is Ayurveda?<NavigateNextIcon /></div></Link>
          <Link to="/doshas" ><div className="bm-item-text">Doshas (physical constitution)<NavigateNextIcon /></div></Link>
          <Link to="/gunas" ><div className="bm-item-text">Gunas (mental tendencies)<NavigateNextIcon /></div></Link>
          <Link to="/recepies" ><div className="bm-item-text">Cooking Recepies<NavigateNextIcon /></div></Link>
          <Link to="/panchakarma" ><div className="bm-item-text">Panchakarma<NavigateNextIcon /></div></Link>
          <Link to="/vpk-test" ><div className="bm-item-text">VPK Test<NavigateNextIcon /></div></Link>
          <div className="separator"></div>
          <Link to="/blog" ><div className="bm-item-text">Blog<NavigateNextIcon /></div></Link>
          <Link to="/market" ><div className="bm-item-text">Marketplace<NavigateNextIcon /></div></Link>
          <Link to="/join" ><div className="bm-item-text">Join your practice<NavigateNextIcon /></div></Link>
          <Link to="/schedule" ><div className="bm-item-text">Video Consultation<NavigateNextIcon /></div></Link>
          {isLoggedIn ? <Link to="/help">Customer Service</Link> : <Link to="/help">Help</Link>}
          {!isLoggedIn ? <div className="menu-footer-text">New Patient? click <Link to="/signup" >here</Link></div> : null}
        </Menu>
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="logo" className="cover-image" />
          </Link>
        </div>
        {currentPath === '/search' ?
        <SearchBar displaySmall={true}/>
        : null}
        <div className="navbar-links-container">
          <Link to="/products" className="navbar-links">Products</Link>
          <Link to="/massages" className="navbar-links">Massages</Link>
          <Link to="/classes" className="navbar-links">Online Classes</Link>
          <Link to="/join" className="navbar-links">Join</Link>
          {isLoggedIn ?
            <div className="navbar-links"> Welcome, Jonathan </div>
            :
            <Link to="/login" className="navbar-links"> Welcome, Sign in </Link>}
        </div>
        <Badge color="secondary" badgeContent="1" style={BadgeCSS}>
          <ShoppingCartIcon style={ShoppingCartIconCSS} />
        </Badge>
      </div>
    </div>
  )
}


export default NavBar;