import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { apiURL } from "../../../util/apiURL";

const AllItems = () => {
  const navigate = useNavigate();
  const API = apiURL();
  // const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">EXAMPLE BANNER</h1>
        <p className="lead">
          This is an example banner, with some filler text for you.
        </p>
        <hr className="my-4"></hr>
        <p>We can use this to demo off some kind of featured thingy here.</p>
        <p className="lead">
          <NavLink
            className="btn btn-primary btn-lg"
            exact
            to="/featured"
            role="button"
          >
            View Collection
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default AllItems;
