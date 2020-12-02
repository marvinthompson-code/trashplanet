import React from "react";
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div class="jumbotron">
      <h1 class="display-4">EXAMPLE BANNER</h1>
      <p class="lead">
        This is an example banner, with some filler text for you.
      </p>
      <hr class="my-4"></hr>
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">
         View Collection
        </a>
      </p>
    </div>
  );
};

export default Home;
