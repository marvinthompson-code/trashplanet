import "../../css/Home.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFeedModalImg } from "../Shop/feedModalSlice";
import yellerLogo from "../../css/images/trashplanetYeller.png"
// css

// components
import FeedModal from "../Shop/FeedModal";
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
import clothingCardCap from "../../css/images/techgirlcard1.png";
import accessoriesCardCap from "../../css/images/techwearboycard2.jpg";

const Home = () => {
  const dispatch = useDispatch();
  const [currentModalImage, setCurrentModalImage] = useState("");

  const handleClick = (e) => {
    setCurrentModalImage(e.target.src);

    console.log(currentModalImage);
  };
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
                alt="Card image cap"
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
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center shopCardTitle">
                  SHOP ACCESSORIES
                </h5>
                <p className="card-text text-center shopCardDescription">
                  View/Shop Trashplxnet Accesories.
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
          <img src={yellerLogo} className={"feedLogo"}/>
          
        </div>
        <br></br>
        <h1 className="display-4 text-center bannerTitle shopTheFeed">
          SHOP THE FEED
        </h1>
        <hr className="my-4"></hr>
        <div className="row">
          <div className="col socialDiv">
            <img
              src={social1}
              alt={"social"}
              className={"homeSocial"}
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={handleClick}
            />
          </div>
          <div className="col socialDiv">
            <img
              src={social2}
              alt={"social"}
              className={"homeSocial"}
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={handleClick}
            />
          </div>
          <div className="col socialDiv">
            <img
              src={social3}
              alt={"social"}
              className={"homeSocial"}
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={handleClick}
            />
          </div>
          <div className="col socialDiv">
            <img
              src={social4}
              alt={"social"}
              className={"homeSocial"}
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={handleClick}
            />
          </div>
          <div className="col socialDiv">
            <img
              src={social5}
              alt={"social"}
              className={"homeSocial"}
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="row">
          <div className="col socialDiv">
            <img
              src={social6}
              alt={"social"}
              className={"homeSocial"}
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={handleClick}
            />
          </div>
          <div className="col socialDiv">
            <img
              src={social7}
              alt={"social"}
              className={"homeSocial"}
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={handleClick}
            />
          </div>
          <div className="col socialDiv">
            <img
              src={social8}
              alt={"social"}
              className={"homeSocial"}
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={handleClick}
            />
          </div>
          <div className="col socialDiv">
            <img
              src={social9}
              alt={"social"}
              className={"homeSocial"}
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={handleClick}
            />
          </div>
          <div className="col socialDiv">
            <img
              src={social10}
              alt={"social"}
              className={"homeSocial"}
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <FeedModal modalImage={currentModalImage} />
    </div>
  );
};

export default Home;
