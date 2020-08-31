import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/home/home";
import Navbar from "./components/Navbar/navbar.js";
import Footer from "./components/footer/footer";
import Search from "./components/search/search";



const App = () => (
<Router>
  <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/search' component={Search}/>
    </Switch>
    <Footer />
</Router>
  );

export default App;
