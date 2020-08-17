import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/home/home";
import Navbar from "./components/Navbar/Navbar.js";

const App = () => (
<Router>
  <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
</Router>
  );

export default App;
