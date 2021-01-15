import React from 'react';

import './file.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/signinreact";

import logo from './logo.svg';

function App() {
  return (<Router>
    <div class="splits left">
  <div class="centered">
    <h2>Welcome to TypeShare</h2>
    <h4>An open source social network!</h4>
   
     <div class="centeredimg">
 <img src="https://somerandomshitforlogo.com/someimageidk" alt="LOGO HERE"></img>
    </div></div>
 </div>
<div class="split right">
<div className="App">
  <div class="centered">
  <div className="outer">
  
    <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
           
          </Switch>
  </div></div>
</div></div>
    </Router>
    
  );
}

export default App;
