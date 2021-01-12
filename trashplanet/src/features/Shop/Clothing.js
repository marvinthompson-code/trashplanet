import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { apiURL } from "../../util/apiURL";
// css
import "../../css/Clothing.css";

const Clothing = () => {
  const API = apiURL();
  const [clothes, setClothes] = useState([]);

  // make an axios call for all items in the clothing category
  // iterate through the items
  // forEach item, create a card with an image, name, price
  // on click, history.push to individual page for that item

  useEffect(() => {
    const fetchClothing = async (category) => {
      let res = await axios.get(`${API}/items/${category}`);
      debugger;
    };
  }, []);
  return (
    <div className="container">
      <div className="jumbotron jumboCollection text-center">
        <h1 className="display-4 bannerTitle">EXAMPLE BANNER</h1>

        <p className="bannerText">We can use this to demo off some kind of featured thingy here.</p>
        <p className="lead">
          <NavLink
            className="btn btn-primary btn-lg bannerButton"
            exact
            to="/featured"
            role="button"
          >
            View Collection
          </NavLink>
        </p>
      </div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">All Clothing</h1>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clothing;
