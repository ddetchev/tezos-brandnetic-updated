import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Connect from "./components/Connect";
import Explore from "./components/Explore";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Contract from "./components/Contract";

function App() {
  //Navbar
  return (
    <Router>
  <Navbar />
  
  <Route path = "/" exact>
  <Login />
  </Route>
  
  <Route path = "/connect">
  <Connect />
  </Route>
  
  <Route path = "/explore">
  <Explore />
  </Route>
  
  <Route path = "/profile">
  <Profile />
  </Route>
  
  <Route path = "/contract">
    <Contract />
  </Route>

</Router>
  )
}

export default App;
