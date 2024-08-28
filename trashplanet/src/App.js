import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";
import "./App.css";
import firebase from "./firebase";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { updateUser } from "./features/Slices/user/userSlice";

// Pages
import Home from "./features/Pages/Home/Home";
import About from "./features/Pages/About/About";
import ShopPage from "./features/Pages/Shop/ShopPage";
import ItemPage from "./features/Pages/ItemPage/itemPage";
import Media from "./features/Pages/Media/Media";
import Misc from "./features/Pages/Misc/Misc";
import Cart from "./features/Pages/Cart/Cart";
import Contact from "./features/Pages/Contact/Contact";
import AllItems from "./features/Pages/shopAll/AllItems";
import Accessories from "./features/Pages/Accessories/Accessories";

// Components
import Footer from "./features/Global/Footer/Footer";
import Nav from "./features/Global/Nav/Nav";

function App() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */

  const fetchProducts = () => {
    commerce.products
      .list()
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      dispatch(updateUser(user));
    });

    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/shop" element={<ShopPage products={products} />} />

        <Route exact path="/shopAll" element={<AllItems />} />

        <Route exact path="/accessories" element={<Accessories />} />

        <Route exact path="/misc" element={<Misc />} />

        <Route exact path="/media" element={<Media />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/item/:id" element={<ItemPage />} />

        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="/checkout"></Route>
        <Route exact path="/thankYou"></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
