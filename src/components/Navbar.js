import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.png";
// react fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark absolute-center">
    <Link className="navbar-brand" to={"/Header"}><img className='logo' src={logo} alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color: "#66fcf1", border:"none" }} />
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav" >
        <li className="nav-item active"> 
          <a className="nav-link" href="#Home">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#C4">about</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Services">services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#HowWork">how work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Portfolio">portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Contact">contact</a>
        </li>
        
      </ul>
    </div>
  </nav>
  </>
  )
};

export default Navbar;
