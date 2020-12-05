import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect } from "react";
import "./App.css";
import firebase from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
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

function App() {
  const dispatch = useDispatch();
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
        <Route exact path="/cart"></Route>
        <Route exact path="/checkout"></Route>
        <Route exact path="/thankYou"></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
