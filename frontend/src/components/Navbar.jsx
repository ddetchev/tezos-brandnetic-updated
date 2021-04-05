import React from "react";
import {Link, BrowserRouter, NavLink, Switch, Route} from "react-router-dom";
import '../App.css';
import logo from './logo.png';
import profilepic from './profilepic.png';

function Navbar() {
    return <nav>

<ul>
  <NavLink exact activeClassName="current" to='/'><img src={logo} width="22%" align="left"></img></NavLink>
  <div id="bar" >
    
    <li><NavLink exact activeClassName="current" to='/connect'>Connect</NavLink></li>
    <li><NavLink exact activeClassName="current" to='/explore'>Explore</NavLink></li>
    <li><NavLink exact activeClassName="current" to='/profile'>My Profile</NavLink></li>
  </div>
  <img src={profilepic} width="3.5%" align="right" id="profilepic"></img>
</ul>
</nav>
}

export default Navbar;