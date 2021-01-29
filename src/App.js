import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/home/home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import Results from "./components/results/results";
// import HealthForm from "./components/results/results";
import Modal from './components/modal/modal';
import Login from './components/reusable/login';
import Logout from './components/reusable/logout';
import { useSelector } from 'react-redux';


const App = () => {
  const modal = useRef(null)
  const isLoggedIn = useSelector(state => state.user.login)

  return (
    <Router>
      <Navbar updateRef={() => modal.current.open()} />
      <Modal ref={modal} children={isLoggedIn ?
        <Logout closeRef={() => modal.current.close()} />
        : <Login closeRef={() => modal.current.close()} />} />
      <Switch >
        <Route exact path='/' component={Home} />
        <Route exact path='/results' component={Results} />
        <Route exact path='/results/:value' component={Results} />
        {/* <Route exact path='/health-form' component={HealthForm}/> */}
        <Route>{'404'}</Route>
      </Switch>
      <Footer />
    </Router>)
}


export default App;
