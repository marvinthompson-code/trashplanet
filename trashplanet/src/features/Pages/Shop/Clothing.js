import React, { useEffect } from "react";
// css
import "../../../css/Clothing.css";

const Clothing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bigContainer">
      <div class="jumbotron jumbotron-fluid text-center clothingJumbo">
        <div class="container">
          <h1 class="display-4 bannerTitle">All Clothing</h1>
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
