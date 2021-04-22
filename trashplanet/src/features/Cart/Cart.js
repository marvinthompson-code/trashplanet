import React, { useEffect, useState } from "react";
import Commerce from "@chec/commerce.js";
const { REACT_APP_CHEC_PUBLIC_KEY } = process.env;

const Cart = () => {
    const [cart, setCart] = useState([])

    const refreshCart = () => {
        const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
        commerce.cart.refresh().then((cart) => setCart(cart));
    }
    useEffect(() => {
        const commerce = new Commerce(`${REACT_APP_CHEC_PUBLIC_KEY}`);
        commerce.cart.retrieve().then((cart) => setCart(cart));
    }, [])
  return <div></div>;
};

export default Cart;
