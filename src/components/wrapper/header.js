import React from "react"
import {Link} from 'react-router-dom';
import logo from './../../chart.gif';

function Header(){
  return (
    <header>
    <img src={logo} id="logo" alt="logo" />
    <h1><Link to="/home">Skillsoft Weight Tracker</Link></h1>

    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/enterweight">Enter Weight</Link></li>
        <li><Link to="/myweights">My Weights</Link></li>
        <li><Link to="/teamweights">Team Weights</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
  </nav>

    </header>
  )
}

export default Header;
