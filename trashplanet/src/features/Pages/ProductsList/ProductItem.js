import React from "react";
import { NavLink } from "react-router-dom";
import "../../../css/ItemCard.css";

const ProductItem = ({ product }) => {
  const newDescription = product.description.replace(/(<([^>]+)>)/gi, "");
  return (
    <div className="product__card card col-md-4 grid-item">
      <img
        className="product__image card-img-top d-block img-fluid img-responsive "
        src={product.media.source}
        alt={product.name}
      />
      <div className="product__info card-body text-center">
        <h4 className="product__name card-title shopCardTitle">
          {product.name}
        </h4>
        <p className="product__description card-text shopCardDescription">
          {/* product description stripped of html tags */}
          {newDescription}
        </p>
        <div className="product__details">
          <p className="product__price card-text shopCardDescription">
            {product.price.formatted_with_symbol}
          </p>
        </div>
        <br></br>
        <div className="text-center">
          <NavLink
            className="btn btn-primary btn-lg bannerButton"
            exact
            to={`/item/${product.id}`}
            role="button"
          >
            View Item
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

{
  /* <div class="card">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
</div>
</div> */
}
