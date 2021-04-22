import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";
import "./App.css";
import firebase from "./firebase";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { updateUser } from "./features/user/userSlice";

// components
import Footer from "./features/Footer/Footer";
import Nav from "./features/Nav/Nav";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Clothing from "./features/Shop/Clothing";
import AllItems from "./features/shopAll/AllItems";
import Accessories from "./features/Accessories/Accessories";
import Media from "./features/Media/Media";
import Misc from "./features/Misc/Misc";
import ProductList from "./features/ProductsList/ProductsList";
import ItemPage from "./features/ItemPage/itemPage";

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
        <Route exact path="/cart"></Route>
        <Route exact path="/checkout"></Route>
        <Route exact path="/thankYou"></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
