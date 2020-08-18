import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import Logo from "../../resources/Ayurveda_Health_Logo.png"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    //   };

    const stateChangeHandler = (newState) => {
        setMenuOpen(newState.isOpen);
      };
    return(
    <div>
      <div className="empty_top_space"></div>
        <div className="navbar_container">
            <Menu
              isOpen={menuOpen}
              onStateChange={(state) => stateChangeHandler(state)}>
              {isLoggedIn ? 
                <div className="welcome_text_menu"> Welcome, Jonathan </div>
                :
              <Link to="/login"className="welcome_text_menu"><div className="bm-item-text"> Welcome,  log in <ExitToAppIcon/></div></Link>}
              <Link to="/account" ><div className="bm-item-text">Your Account <NavigateNextIcon/></div></Link>
              <Link to="/profile"><div className="bm-item-text">Your Profile<NavigateNextIcon/></div></Link>
              <Link to="/appointments"><div className="bm-item-text">Your Appointments<NavigateNextIcon/></div></Link>
              <Link to="/orders"><div className="bm-item-text">Your Orders & Returns<NavigateNextIcon/></div></Link>
              <div className="separator"></div>
              <Link to="/testimonials" ><div className="bm-item-text">Testimonials<NavigateNextIcon/></div></Link>
              <Link to="/endorsements" ><div className="bm-item-text">Endorsements<NavigateNextIcon/></div></Link>
              <Link to="/media" ><div className="bm-item-text">Ayurveda in the media<NavigateNextIcon/></div></Link>
              <Link to="/research" ><div className="bm-item-text">Researches<NavigateNextIcon/></div></Link>
              <div className="separator"></div>
              <Link to="/what-is-ayurveda" ><div className="bm-item-text">What is Ayurveda?<NavigateNextIcon/></div></Link>
              <Link to="/doshas" ><div className="bm-item-text">Doshas (physical constitution)<NavigateNextIcon/></div></Link>
              <Link to="/gunas" ><div className="bm-item-text">Gunas (mental tendencies)<NavigateNextIcon/></div></Link>
              <Link to="/recepies" ><div className="bm-item-text">Cooking Recepies<NavigateNextIcon/></div></Link>
              <Link to="/panchakarma" ><div className="bm-item-text">Panchakarma<NavigateNextIcon/></div></Link>
              <Link to="/vpk-test" ><div className="bm-item-text">VPK Test<NavigateNextIcon/></div></Link>
              <div className="separator"></div>
              <Link to="/blog" ><div className="bm-item-text">Blog<NavigateNextIcon/></div></Link>
              <Link to="/market" ><div className="bm-item-text">Marketplace<NavigateNextIcon/></div></Link>
              <Link to="/schedule" ><div className="bm-item-text">Video Consultation<NavigateNextIcon/></div></Link>
              {isLoggedIn ? <Link to="/help">Customer Service</Link>: <Link to="/help">Help</Link>}
              {!isLoggedIn ? <div className="menu_footer_text">New Patient? click <Link to="/signup" >here</Link></div> : null}
            </Menu>
            <div className="logo_container">
              <Link to="/">
                <img src={Logo} alt="logo" className="cover_image"/>
              </Link>
            </div>
            <div className="navbar_links_container">
              <Link to="/products" className="navbar_links">Products</Link>
              <Link to="/practitioners" className="navbar_links">Ayurveda Practitioners</Link>
              {isLoggedIn ?
              <div className="navbar_links"> Welcome, Jonathan </div>
              :
              <Link to="/login" className="navbar_links"> Welcome, Sign in </Link> }
            </div>
            <Link to="/cart" className="shopping_item_container">
              <div className="cart_items"> 1 </div>
              <ShoppingCartIcon/>
            </Link>
        </div>
    </div>
    )
}


export default NavBar;