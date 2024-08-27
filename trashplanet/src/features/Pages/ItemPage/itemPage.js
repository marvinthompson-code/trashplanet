import "../../../css/ItemPage.css";
import yellerLogo from "../../../css/images/misc/trashplanetYeller.png";
import React, { useEffect, useState } from "react";
import Commerce from "@chec/commerce.js";
import { useMatch, NavLink } from "react-router-dom";
const { REACT_APP_CHEC_PUBLIC_KEY } = process.env;

const ItemPage = () => {
  const match = useMatch();
  // we need size variant functionality
  // make a dropdown for size
  // we need a handleClick to add to cart

  // local state variables
  const [currentProduct, setCurrentProduct] = useState(null);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState("0");
  const [inventory, setInventory] = useState(null);

  // add to cart function
  const addToCart = (itemId, quantity) => {
    const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
    commerce.cart
      .add(itemId, quantity)
      //do stuff with response
      .then((response) => console.log(response));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    // add to cart
    addToCart(match.params.id, quantity);
    debugger;
    // notification card comes up with message
  };

  useEffect(() => {
    const fetchProduct = () => {
      try {
        const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
        commerce.products.retrieve(match.params.id).then((product) => {
          const newDescription = product.description.replace(
            /(<([^>]+)>)/gi,
            ""
          );
          let { available } = product.inventory;
          setName(product.name);
          setPrice(product.price.formatted_with_symbol);
          setCurrentProduct(product);
          setDescription(newDescription);
          setImage(product.media.source);
          debugger;
          setInventory(available);
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, [match.params.id]);

  return (
    <>
      <div className="container">
        <div className="jumbotron jumbotron-fluid productJumbo">
          <div className="productNameContainer">
            <h1 className="nameProduct text-center">{name}</h1>
          </div>

          <div className="row productDivParent">
            <div className="col-sm-6 productImageContainer">
              <div className="productImage">
                <img src={image} alt="Item" className="imageProduct" />
              </div>
            </div>

            <div className="col-sm-6 productImageContainer">
              <div className="descriptionDiv text-center">
                <p className="descriptionProduct">{description}</p>
                <p className="priceProduct">{price}</p>
              </div>
              <div className="text-center">
                <div>
                  {inventory ? (
                    <>
                      <form onSubmit={handleSubmit}>
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <label className="descriptionProduct">
                                quantity
                              </label>
                              <input
                                type="number"
                                name="quantity"
                                min="1"
                                max={inventory.toString()}
                                step="1"
                                value={quantity.toString()}
                                class="cn "
                                onChange={(e) => {
                                  setQuantity(Number(e.target.value));
                                  // console.log(Number(quantity))
                                }}
                              />
                            </div>

                            <div className="col">
                              <button
                                className="btn btn-primary btn-lg bannerButton"
                                type="submit"
                              >
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </>
                  ) : (
                    <>
                      <h1 className="nameProduct">Sold Out</h1>
                      <br></br>
                      <NavLink
                        className="btn btn-primary btn-lg bannerButton"
                        exact
                        to="/shop"
                        role="button"
                      >
                        Back to Clothing
                      </NavLink>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <br></br>
          <div className="logoContainer text-center">
            <img src={yellerLogo} className="productLogo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
