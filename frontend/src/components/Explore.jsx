import '../App.css';
//import React from 'react';
import React, {Component} from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import logo from './logo.png';
import profilepic from './profilepic.png';
import explore1 from './explore1.jpg';
import explore2 from './explore2.jpg';
import explore3 from './explore3.jpg';
import explore4 from './explore4.jpg';
import explore5 from './explore5.jpg';
import explore6 from './explore6.jpg';
import explore7 from './explore7.jpg';
import explore8 from './explore8.jpg';

function Explore() {
    return <div class="container">
    <input class="input input1" type="text" placeholder="Search.."></input>
    <p></p>
    <button class="button button1">Reality TV</button>
    <button class="button button1">Youtubers</button>
    <button class="button button1">Bloggers</button>
    <button class="button button1">Microinfluencers</button>
    <button class="button button1">Beauty</button>
    <button class="button button1">Lifestyle</button>
    <button class="button button1">Fashion</button>
    <button class="button button1">Small Businesses</button>
    <button class="button button1">Food</button>
    <button class="button button1">Sustainable Businesses</button>
    <button class="button button1">Travel</button>
    <button class="button button1">Fitness</button>
    <p></p>
	<div id="list" class="section">
    <div class="item1"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore1} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
    <div class="item2"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore2} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
    <div class="item3"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore3} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
    <div class="item2"> <NavLink exact activeClassName="current" to='/contract'>
      <img src={explore4} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item4"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore5} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item2"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore6} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item3"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore7} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item1"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore8} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item3"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore1} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item4"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore2} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item2"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore3} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item4"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore4} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
    <div class="item1"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore5} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item2"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore6} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item3"> <NavLink exact activeClassName="current" to='/contract'>
      <img src={explore7} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item1"> <NavLink exact activeClassName="current" to='/contract'>
      <img src={explore8} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item3"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore1} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item4"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore2} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item2"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore3} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
		<div class="item4"><NavLink exact activeClassName="current" to='/contract'>
      <img src={explore4} style={{borderRadius: "16px"}} width="100%" height="100%"></img></NavLink></div>
	</div>
</div>
    
}

export default Explore;