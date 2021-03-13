import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import shoppingCart from "../../css/icons/shopping-cart.png";
import loginIcon from "../../css/icons/user.png";
import "../../css/Nav.css";
import yellerLogo from "../../css/images/trashplanetYeller.png"
const Nav = () => {
  const history = useHistory();

  const showButtons = () => {
    // maybe when logged in, it can display a custom greeting, a profile with order history?
    // if there is a user, change the icon to reflect the message and link to profile instead
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand brandTitle" exact to="/">
        {/* TRASHPLXNET */}
        <img  src={yellerLogo} alt={"Trashplanet Logo"} className={"tpLogo"}/>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link navLink" exact to="/">
              HOME<span className="sr-only">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item dropdown navLink">
            <a
              className="nav-link dropdown-toggle navLink"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              SHOP
            </a>
            <div
              className="dropdown-menu dropdownParent"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <NavLink className="dropdown-item navLink" exact to="/shop">
                CLOTHING
              </NavLink>
              <NavLink
                className="dropdown-item navLink"
                exact
                to="/accessories"
              >
                ACCESSORIES
              </NavLink>
              <NavLink className="dropdown-item navLink" exact to="/misc">
                MISC
              </NavLink>
              <NavLink className="dropdown-item navLink" exact to="shopAll">
                VIEW ALL
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link navLink" exact to="/featured">
              FEATURED
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link navLink" exact to="/media">
              MEDIA
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link navLink" exact to="/contact">
              CONTACT
            </NavLink>
          </li>
          {/* <li className="nav-item shoppingCart">

          <img src={shoppingCart}>

          </img>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
