import "../../css/ItemPage.css";
import yellerLogo from "../../css/images/trashplanetYeller.png";
import React, { useEffect, useState } from "react";
import Commerce from "@chec/commerce.js";
import { useRouteMatch } from "react-router-dom";
const { REACT_APP_CHEC_PUBLIC_KEY } = process.env;

const ItemPage = () => {
  const match = useRouteMatch();
  // we need size variant functionality
  // make a dropdown for size
  // we need a handleClick to add to cart

  // local state variables
  const [currentProduct, setCurrentProduct] = useState(null);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [inventory, setInventory] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    // add to cart
    // notification card comes up with message
  };

  useEffect(() => {
    const fetchProduct = () => {
      try {
        const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
        commerce.products.retrieve(match.params.id).then((product) => {
          debugger;
          const newDescription = product.description.replace(
            /(<([^>]+)>)/gi,
            ""
          );
          setName(product.name);
          setPrice(product.price.formatted_with_symbol);
          setCurrentProduct(product);
          setDescription(newDescription);
          setImage(product.media.source);
          setInventory(product.inventory);
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, [match.params.id]);

  return (
    <div>
      <div className="container">
        <div className="jumbotron jumbotron-fluid productJumbo">
          <div className="productNameContainer">
            <h1 className="nameProduct text-center">{name}</h1>
          </div>
          <div className="row">
            <div className="col productImageContainer">
              <div className="productImage">
                <img src={image} alt={"Item"} className="imageProduct" />
              </div>
            </div>
            <div className="col productImageContainer">
              <div className="descriptionDiv text-center">
                <p className="descriptionProduct">{description}</p>
                <p className="priceProduct">{price}</p>
              </div>
              <div className="text-center">
                <div>
                  {quantity ? (
                    <>
                      <label>quantity</label>
                      <div>
                        <input
                          type="number"
                          class="cn"
                          min={quantity}
                          step="1"
                          max={inventory}
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <h1 className="nameProduct">Sold Out</h1>
                    </>
                  )}
                </div>

                {quantity ? (
                  <button
                    className="btn btn-primary btn-lg bannerButton"
                    onClick={handleClick}
                  >
                    Add to Cart
                  </button>
                ) : null}
              </div>
            </div>
          </div>
          <br></br>
          <div className="logoContainer text-center">
            <img src={yellerLogo} className={"productLogo"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
