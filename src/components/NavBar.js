import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import Logo from "../resources/Ayurveda_Health_Logo.png"
import "./reusable/reusable.css"


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

    const stateChangeHandler = (newState) => {
        setMenuOpen(newState.isOpen);
      };
    return(
        <div className="navbar_container">
            <div className="menu_empty_space"></div>
            <Menu
              isOpen={menuOpen}
              onStateChange={(state) => stateChangeHandler(state)}
            >
              {isLoggedIn ? <div>
              <div className="welcome_text"> Welcome, Jonathan </div>
              <Link to="/account" >Your Account</Link>
              <Link to="/profile">Your Profile</Link>
              <Link to="/appointments">Your Appointments</Link>
              <Link to="/orders">Your Orders & Returns</Link>
              </div> :
              <div>
              <button> Log in</button>
              <div>New Patient? click <Link to="/signin" >here</Link></div>
              </div>}
              <Link to="/testimonials" >Testimonials</Link>
              <Link to="/endorsements" >Endorsements</Link>
              <Link to="/media" >Ayurveda in the media</Link>
              <Link to="/research" >Researches</Link>
              <Link to="/what-is-ayurveda" >What is Ayurveda?</Link>
              <Link to="/doshas" >Doshas (physical constitution)</Link>
              <Link to="/gunas" >Gunas (mental tendencies)</Link>
              <Link to="/recepies" >Cooking Recepies</Link>
              <Link to="/panchakarma" >Panchakarma</Link>
              <Link to="/vpk-test" >VPK Test</Link>
              <Link to="/blog" >Blog</Link>
              <Link to="/market" >Marketplace</Link>
              <Link to="/schedule" >Video Consultation</Link>
              <div className="menu_footer">
                <Link to="/signin" >Help</Link>
                <div>New Patient? click <Link to="/signin" >here</Link></div>
                <button> Sign in</button>
                </div>
            </Menu>
            <div className="logo_container">
              <Link to="/">
                <img src={Logo} alt="logo" className="cover_image"/>
              </Link>
            </div>
            {/* <Link to={} onClick={toggleMenu}>Products</Link> */}
            <div className="navbar_empty_space"></div>
            <Link to="/practitioners" onClick={toggleMenu} >Ayurveda Practitioners</Link>
            {isLoggedIn ? <div className="welcome_text"> Welcome, Jonathan </div> : <Link to="" onClick={toggleMenu} className="welcome_text"> Welcome, Sign in</Link>}
        </div>
    )
}


export default NavBar;