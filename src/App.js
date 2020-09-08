import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Results from "./components/results/results";



const App = () => (
<Router>
  <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/results' component={Results}/>
    </Switch>
    <Footer />
</Router>
  );

export default App;
