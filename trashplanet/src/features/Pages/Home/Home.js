import "../../../css/Home.css";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import yellerLogo from "../../../css/images/misc/trashplanetYeller.png";
import SocialFeed from "./SocialFeed";

import clothingCardCap from "../../../css/images/misc/techgirlcard1.png";
import accessoriesCardCap from "../../../css/images/misc/techwearboycard2.jpg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bigContainer">
      <div className="jumbotron text-center jumboHome jumboCollection">
        <h1 className="display-4 bannerTitle">WINTER COLLECTION</h1>
        <p className="bannerText">
          We can use this to demo off some kind of featured thingy here.
        </p>
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
      <br></br>
      <div className="container">
        <div className="card-deck row">
          <div className="cardContainer col-md-6">
            <div className="card">
              <img
                className="card-img-top cardTop d-block img-fluid img-responsive "
                src={clothingCardCap}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center shopCardTitle">
                  SHOP CLOTHING
                </h5>
                <p className="card-text text-center shopCardDescription">
                  New items - updated regularly.
                </p>
                <div className="text-center">
                  <NavLink
                    className="btn btn-primary btn-lg bannerButton"
                    exact
                    to="/shop"
                    role="button"
                  >
                    Shop Clothing
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="cardContainer col-md-6">
            <div className="card">
              <img
                className="card-img-top cardTop d-block img-fluid img-responsive "
                src={accessoriesCardCap}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center shopCardTitle">
                  SHOP ACCESSORIES
                </h5>
                <p className="card-text text-center shopCardDescription">
                  Shop Trashplxnet Accesories.
                </p>
                <div className="text-center">
                  <NavLink
                    className="btn btn-primary btn-lg bannerButton"
                    exact
                    to="/accessories"
                    role="button"
                  >
                    Shop Accessories
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="jumbotron jumboHome feedJumbo">
        <div className="text-center">
          <img src={yellerLogo} className="feedLogo" alt="logo" />
        </div>
        <br></br>
        <h1 className="display-4 text-center bannerTitle shopTheFeed">
          SHOP THE FEED
        </h1>
        <hr className="my-4"></hr>
        <SocialFeed />
      </div>
    </div>
  );
};

export default Home;
