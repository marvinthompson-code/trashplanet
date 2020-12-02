import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useHistory } from "react-router-dom";
import { apiURL} from "../../util/apiURL";

const Clothing = () => {
  const history = useHistory();
  const API  = apiURL();
  const [ clothes, setClothes ] = useState([])

  // make an axios call for all items in the clothing category
  // iterate through the items
  // forEach item, create a card with an image, name, price
  // on click, history.push to individual page for that item

  useEffect(() => {
      const fetchClothing = async (category) => {
          let res = await axios.get(`${API}/items/${category}`)
          debugger
      }
  }, [])
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
      <div></div>
    </div>
  );
};

export default Clothing;
