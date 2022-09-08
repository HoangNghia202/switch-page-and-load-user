import React from "react";
import "./Nav.scss"
import {
    NavLink
  } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div class="topnav">
        <NavLink to="/" exact={"true"} activeClassName="active" >Home</NavLink>
        <NavLink to="/todo"  activeClassName="active" >Todos</NavLink>
        <NavLink to="/listUser"  activeClassName="active" >List User</NavLink>
        {/* <a class="active" href="/">
          Home
        </a>
        <a href="/todo">to do</a> */}
        {/* <a href="#contact">Contact</a>
        <a href="#about">About</a> */}
      </div>
    );
  }
}

export default Nav; 
