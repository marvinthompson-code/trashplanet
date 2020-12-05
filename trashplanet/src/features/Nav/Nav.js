import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import shoppingCart from "../../css/icons/shopping-cart.png";

const Nav = () => {
  const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" exact to="/">
        TRASHPLXNET
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
            <NavLink className="nav-link" exact to="/">
              HOME<span className="sr-only">(current)</span>
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              SHOP
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <NavLink className="dropdown-item" exact to="/shop">
                CLOTHING
              </NavLink>
              <NavLink className="dropdown-item" exact to="/accessories">
                ACCESSORIES
              </NavLink>
              <NavLink className="dropdown-item" exact to="/misc">
                MISC
              </NavLink>
              <NavLink className="dropdown-item" exact to="shopAll">
                VIEW ALL
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/featured">
              FEATURED
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/media">
              MEDIA
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
