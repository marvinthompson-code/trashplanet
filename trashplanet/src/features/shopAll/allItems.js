import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useHistory } from "react-router-dom";
import { apiURL } from "../../util/apiURL";

const AllItems = () => {
  const history = useHistory();
  const API = apiURL();
  const [allItems, setAllItems] = useState([]);

  // axios call to get all items
  // pass individual item as a prop to inidividual item card component
  // on click, history.push to item page

  useEffect(() => {}, []);
  return (
    <div className="container">
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
