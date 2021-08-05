import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  let productItems = products.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });
  return (
    <div className="container">
      <div className="products card-deck row">{productItems}</div>;
    </div>
  );
};

export default ProductList;
