import React from "react";
import { NavLink } from "react-router-dom";
// css
import "../../css/Home.css";
// images
import social1 from "../../css/images/social1.jpeg";
import social2 from "../../css/images/social2.jpeg";
import social3 from "../../css/images/social3.jpeg";
import social4 from "../../css/images/social4.jpeg";
import social5 from "../../css/images/social5.jpeg";
import social6 from "../../css/images/social6.jpeg";
import social7 from "../../css/images/social7.jpeg";
import social8 from "../../css/images/social8.jpeg";
import social9 from "../../css/images/social9.jpeg";
import social10 from "../../css/images/social10.jpeg";

const Home = () => {
  return (
    <div className="bigContainer">
      <div className="jumbotron text-left jumboHome jumboCollection">
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
      <div className="jumbotron text-right jumboHome jumbo2">
        <h1 className="display-4 bannerTitle">EXAMPLE BANNER 2</h1>
        <p className="bannerText">
          We can use this to demo off some kind of featured thingy here.
        </p>
        <p className="lead">
          <NavLink
            className="btn btn-primary btn-lg bannerButton"
            exact
            to="/shop"
            role="button"
          >
            Shop Clothing
          </NavLink>
        </p>
      </div>
      <br></br>
      <div className="jumbotron jumboHome feedJumbo">
        <h1 className="display-4 text-center bannerTitle">SHOP THE FEED</h1>
        <hr className="my-4"></hr>
        <div className="row">
          <div className="col socialDiv">
            <img src={social1} alt={"social"} className={"homeSocial"} />
          </div>
          <div className="col socialDiv">
            <img src={social2} alt={"social"} className={"homeSocial"} />
          </div>
          <div className="col socialDiv">
            <img src={social3} alt={"social"} className={"homeSocial"} />
          </div>
          <div className="col socialDiv">
            <img src={social4} alt={"social"} className={"homeSocial"} />
          </div>
          <div className="col socialDiv">
            <img src={social5} alt={"social"} className={"homeSocial"} />
          </div>
        </div>
        <div className="row">
          <div className="col socialDiv">
            <img src={social6} alt={"social"} className={"homeSocial"} />
          </div>
          <div className="col socialDiv">
            <img src={social7} alt={"social"} className={"homeSocial"} />
          </div>
          <div className="col socialDiv">
            <img src={social8} alt={"social"} className={"homeSocial"} />
          </div>
          <div className="col socialDiv">
            <img src={social9} alt={"social"} className={"homeSocial"} />
          </div>
          <div className="col socialDiv">
            <img src={social10} alt={"social"} className={"homeSocial"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
