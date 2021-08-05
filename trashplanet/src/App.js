import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";
import "./App.css";
import firebase from "./firebase";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { updateUser } from "./features/Slices/user/userSlice";

// Pages
import Home from "./features/Pages/Home/Home";
import About from "./features/Pages/About/About";
import Clothing from "./features/Pages/Shop/Clothing";
import ProductList from "./features/Pages/ProductsList/ProductsList";
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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Clothing />
          <ProductList products={products} />
        </Route>
        <Route exact path="/shopAll">
          <AllItems />
        </Route>
        <Route exact path="/accessories">
          <Accessories />
        </Route>
        <Route exact path="/misc">
          <Misc />
        </Route>
        <Route exact path="/media">
          <Media />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/item/:id">
          <ItemPage />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/checkout"></Route>
        <Route exact path="/thankYou"></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
