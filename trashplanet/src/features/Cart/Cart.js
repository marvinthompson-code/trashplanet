import React, { useEffect, useState } from "react";
import Commerce from "@chec/commerce.js";
const { REACT_APP_CHEC_PUBLIC_KEY } = process.env;

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [cartId, setCartId] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // cart functions
  const refreshCart = () => {
    const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
    commerce.cart.refresh().then((cart) => setCart(cart));
  };
  const emptyCart = () => {
    const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
    // use a debugger to figure out what the response is, and do stuff with it. Maybe make a popup?
    commerce.cart.empty().then((response) => console.log(response));
  };

  const updateCart = (itemId, newQuantity) => {
    // The update() method uses PUT v1/carts/{cart_id}/items/{line_item_id} to update the quantity or variant for the line item ID in the cart.
    const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
    commerce.cart
      .update(itemId, { quantity: newQuantity })
      //do stuff with response
      .then((response) => console.log(response));
  };

//   const addToCart = (itemId, quantity) => {
//     const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
//     commerce.cart
//       .add(itemId, quantity)
//       //do stuff with response
//       .then((response) => console.log(response));
//   };

  const getCartId = () => {
    const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
    commerce.cart.id().then((cartId) => setCartId(cartId));
  };

  const getCartItems = () => {
    const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
    commerce.cart.contents().then((items) => setCartItems(items));
  };

  useEffect(() => {
    const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
    commerce.cart.retrieve().then((cart) => setCart(cart));
  }, []);
  return <div></div>;
};

export default Cart;
