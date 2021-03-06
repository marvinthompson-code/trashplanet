import React from "react";
import { NavLink } from "react-router-dom"
import '../../css/Footer.css'
const Footer = () => {
  return (
  <footer className="footer row">
    
      <div className="col text-center">
    <NavLink exact to={"/about"} className={"footer-item"}>
          ABOUT
    </NavLink>
      </div>
      <div className="col text-center">

    <NavLink exact to={"/contact"} className={"footer-item"}>
          CONTACT
    </NavLink>
      </div>

  </footer>
  );
};

export default Footer;
