import React from 'react';
import { Link } from 'react-router-dom';


const pStyle = {
    fontSize: '20px'
  };

const Navbar = () => {
    return ( 
    <nav className="navbar navbar-expand-sm bg-info navbar-dark">
    <h3>
    <i className="fa fa-dashboard" style={pStyle} ></i>
    </h3>
  <ul className="navbar-nav">
    <li className="nav-item ">
      <Link className="nav-link" to="/dashboard">Dashboard</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/name">Books details</Link>
    </li>
  </ul>
  <input type="text" placeholder="Search.."></input>
    </nav>
    )
}

export default Navbar;


