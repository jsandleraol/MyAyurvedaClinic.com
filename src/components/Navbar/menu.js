import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSelector} from 'react-redux';


const MenuBar = ({updateRef}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = useSelector(state => state.user.login)
  const userName = useSelector(state => state.user.name)


  const stateChangeHandler = (newState) => {
    setMenuOpen(newState.isOpen);
    // setTimeout(() => {
    //   if (newState.isOpen) {
    //     document.activeElement.onBlur();
    //   })
  };

  return (
    <div>
        <Menu
          isOpen={menuOpen}
          onStateChange={(state) => stateChangeHandler(state)}
          // onFocus={e => e.target.blur()}
          >
          {isLoggedIn ?
            <div className="welcome-text-menu" onClick={() => updateRef()}> Welcome, {userName} </div>
            :
            <div onClick={() => updateRef()} className="welcome-text-menu"><div className="bm-item-text"> Welcome,  log in <ExitToAppIcon /></div></div>}
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
        </div>
  )
}


export default MenuBar;