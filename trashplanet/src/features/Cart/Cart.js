import "../../css/Cart.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Commerce from "@chec/commerce.js";
const { REACT_APP_CHEC_PUBLIC_KEY } = process.env;

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [cartId, setCartId] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubtotal] = useState("");
  const [totalItems, setTotalItems] = useState(0);

  // cart functions
  const refreshCart = () => {
    const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
    commerce.cart.refresh().then((cart) => setCart(cart));
  };

  const handleCartClear = () => {
    const emptyCart = () => {
      const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
      // use a debugger to figure out what the response is, and do stuff with it. Maybe make a popup?
      commerce.cart.empty().then((response) => console.log(response));
    };
    try {
      emptyCart();
      debugger;
      refreshCart();
    } catch (error) {
      console.log(error.message);
    }
  };

  //maybe save this function for later? once an item is fully bought, then update cart
  const updateCart = (itemId, newQuantity) => {
    // The update() method uses PUT v1/carts/{cart_id}/items/{line_item_id} to update the quantity or variant for the line item ID in the cart.
    const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
    commerce.cart
      .update(itemId, { quantity: newQuantity })
      //do stuff with response
      .then((response) => console.log(response));
  };

  const getCartId = () => {
    const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
    commerce.cart.id().then((cartId) => setCartId(cartId));
  };

  const getCartItems = () => {
    const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
    commerce.cart.contents().then((items) => {
      debugger;
      setCartItems(items);
    });
  };

  // create a variable, iterate through the cart items and create card components for each card

  useEffect(() => {
    const retriveCart = () => {
      try {
        // create a new updated instance of the cart
        const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
        commerce.cart.retrieve().then((cart) => {
          debugger;
          // extracting pieces of important data from our cart
          let { total_items, id } = cart;
          let { formatted_with_symbol } = cart.subtotal;
          setTotalItems(total_items);
          setSubtotal(formatted_with_symbol);
          setCartId(id);
          setCart(cart);
        });

        // then get the items so we can display them??
        getCartItems();
        debugger;
      } catch (error) {
        console.log(error.message);
      }
    };
    retriveCart();
  }, []);
  return (
    <div className="cartParent container">
      <div className="jumbotron cartJumbo text-center">
        <h1 className="display-4 nameProduct">Cart</h1>

        <p className="lead cartDescription">
          View current items, remove items, or clear the cart.
        </p>
        <hr className="my-4 divider" />
        {!totalItems ? (
          <p className="lead cartStatus">Your cart is empty</p>
        ) : (
          <p className="lead cartStatus">Hello, world!</p>
        )}
        <hr className="my-4 divider" />
        <p className="lead">
          <NavLink
            className="btn btn-primary btn-lg bannerButton"
            role="button"
            to="/checkout"
          >
            Proceed to Checkout
          </NavLink>
        </p>
        <p className="lead">
          <NavLink
            className="btn btn-primary btn-lg bannerButton"
            role="button"
            to="/"
          >
            Back to Home
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Cart;

// {!totalItems ? <h1>Your cart is empty</h1> : null}
