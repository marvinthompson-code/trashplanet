import React from "react";
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div className="container">

    <div class="jumbotron">
      <h1 class="display-4">EXAMPLE BANNER</h1>
      <p class="lead">
        This is an example banner, with some filler text for you.
      </p>
      <hr class="my-4"></hr>
      <p>
        We can use this to demo off some kind of featured thingy here.
      </p>
      <p class="lead">
        <NavLink class="btn btn-primary btn-lg" exact to="/featured" role="button">
         View Collection
        </NavLink>
      </p>
    </div>
    <br></br>
    <div class="jumbotron">
      <h1 class="display-4">EXAMPLE BANNER 2</h1>
      <p class="lead">
        Maybe for a specific clothing item?
      </p>
      <hr class="my-4"></hr>
      <p>
        We can use this to demo off some kind of featured thingy here.
      </p>
      <p class="lead">
        <NavLink class="btn btn-primary btn-lg" exact to="/shop" role="button">
          Shop Clothing
        </NavLink>
      </p>
    </div>
    </div>
  );
};

export default Home;
