import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/Logo.png";
import { Profile } from "./profile";
export const Navbar=()=>{
    return(
        <header className="navbar">
           <Link to="/" className="navbar-logo">
            <img src={logo} alt="logo" />
           </Link>
           <nav className="nav">
           <Link to="/dashbord" className="nav-item">
                <span><i class="uil uil-apps"></i></span>
                 <p>Dashbord</p>
              </Link>
              <Link to="/chat" className="nav-item">
                <span><i class="uil uil-comments"></i></span>
                 <p>Chat</p>
              </Link>
              <Link to="/meeting" className="nav-item">
                <span><i class="uil uil-airplay"></i></span>
                 <p>Meeting</p>
              </Link>
              <Link to="/contact" className="nav-item">
                <span><i class="uil uil-users-alt"></i></span>
                 <p>Contact</p>
              </Link>
           </nav>
           <Profile />
        </header>
    )
}