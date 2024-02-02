import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const listStyle = {
    "textDecoration": "none",
    "color": "black"
  };
  return (
    <nav>
      <div className="logo">
        <Link to="/" style={listStyle}>
          Logo
        </Link>
      </div>
      <div className="links">
        <ul>
          
            <Link to="/" style={listStyle}>
             <li>All</li>
            </Link>
         
          
            <Link to="/full stack development" style={listStyle}>
              <li>full stack development</li>
            </Link>
        
         
            <Link to="/data science" style={listStyle}>
             <li>data science</li>
            </Link>
         
            <Link to="/career" style={listStyle}>
              <li>career</li>
            </Link>
         
            <Link to="/cyber security" style={listStyle}>
             <li>cyber security</li>
            </Link>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;