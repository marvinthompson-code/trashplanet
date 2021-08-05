import React, { useState, useEffect } from "react";
import { useeSelector } from "react-redux";
// css
import "../../../css/FeedModal.css";
const FeedModal = ({ modalImage }) => {
  return (
    <div
      className="modal fade feedModal"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content text-center">
          <div className="modal-header text-center">
            <h5
              className="modal-title"
              id="exampleModalLongTitle"
              className="shopCardTitle"
            >
              SHOP THE FEED
            </h5>
            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> */}
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col feedModalImgContainer">
                <img src={modalImage} className="feedModalImg" />
              </div>
              <div className="col"></div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary bannerButton"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedModal;
