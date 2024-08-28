import React, { useState } from "react";
// import { useDispatch } from "react-redux";

import social1 from "../../../css/images/dummySocialFeed/social1.jpeg";
import social2 from "../../../css/images/dummySocialFeed/social2.jpeg";
import social3 from "../../../css/images/dummySocialFeed/social3.jpeg";
import social4 from "../../../css/images/dummySocialFeed/social4.jpeg";
import social5 from "../../../css/images/dummySocialFeed/social5.jpeg";
import social6 from "../../../css/images/dummySocialFeed/social6.jpeg";
import social7 from "../../../css/images/dummySocialFeed/social7.jpeg";
import social8 from "../../../css/images/dummySocialFeed/social8.jpeg";
import social9 from "../../../css/images/dummySocialFeed/social9.jpeg";
import social10 from "../../../css/images/dummySocialFeed/social10.jpeg";

import FeedModal from "../Shop/FeedModal";
const SocialFeed = () => {
  const [currentModalImage, setCurrentModalImage] = useState("");
  const [toggle, setToggle] = useState(false)
  // const dispatch = useDispatch();

  const handleClick = (e) => {
    setCurrentModalImage(e.target.src);
    setToggle(!toggle)
  };
  return (
    <>
      <div className="row">
        <div className="col socialDiv">
          <img
            src={social1}
            alt="social"
            className="homeSocial"
            data-toggle="modal"
            data-target="feedModal"
            onClick={handleClick}
          />
        </div>
        <div className="col socialDiv">
          <img
            src={social2}
            alt="social"
            className="homeSocial"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={handleClick}
          />
        </div>
        <div className="col socialDiv">
          <img
            src={social3}
            alt="social"
            className="homeSocial"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={handleClick}
          />
        </div>
        <div className="col socialDiv">
          <img
            src={social4}
            alt="social"
            className="homeSocial"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={handleClick}
          />
        </div>
        <div className="col socialDiv">
          <img
            src={social5}
            alt="social"
            className="homeSocial"
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
            alt="social"
            className="homeSocial"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={handleClick}
          />
        </div>
        <div className="col socialDiv">
          <img
            src={social7}
            alt="social"
            className="homeSocial"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={handleClick}
          />
        </div>
        <div className="col socialDiv">
          <img
            src={social8}
            alt="social"
            className="homeSocial"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={handleClick}
          />
        </div>
        <div className="col socialDiv">
          <img
            src={social9}
            alt="social"
            className="homeSocial"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={handleClick}
          />
        </div>
        <div className="col socialDiv">
          <img
            src={social10}
            alt="social"
            className="homeSocial"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={handleClick}
          />
        </div>
      </div>
      <FeedModal modalImage={currentModalImage} />
    </>
  );
};

export default SocialFeed;
