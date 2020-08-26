import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/home/home";
import Navbar from "./components/Navbar/navbar.js";
import Footer from "./components/footer/footer";


const App = () => (
<Router>
  <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
    <Footer />
</Router>
  );

export default App;
