import React from "react";
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div className="container">

    <div className="jumbotron">
      <h1 className="display-4">EXAMPLE BANNER</h1>
      <p className="lead">
        This is an example banner, with some filler text for you.
      </p>
      <hr className="my-4"></hr>
      <p>
        We can use this to demo off some kind of featured thingy here.
      </p>
      <p className="lead">
        <NavLink className="btn btn-primary btn-lg" exact to="/featured" role="button">
         View Collection
        </NavLink>
      </p>
    </div>
    <br></br>
    <div className="jumbotron">
      <h1 className="display-4">EXAMPLE BANNER 2</h1>
      <p className="lead">
        Maybe for a specific clothing item?
      </p>
      <hr className="my-4"></hr>
      <p>
        We can use this to demo off some kind of featured thingy here.
      </p>
      <p className="lead">
        <NavLink className="btn btn-primary btn-lg" exact to="/shop" role="button">
          Shop Clothing
        </NavLink>
      </p>
    </div>
    </div>
  );
};

export default Home;
