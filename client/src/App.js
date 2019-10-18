import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Outer from "./components/items/Outer";
import Top from "./components/items/Top";
import Shirts from "./components/items/Shirts";
import Pants from "./components/items/Pants";
import Shoes from "./components/items/Shoes";
import Accessory from "./components/items/Accessory";

import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/outer" component={Outer} />
            <Route exact path="/top" component={Top} />
            <Route exact path="/shirts" component={Shirts} />
            <Route exact path="/pants" component={Pants} />
            <Route exact path="/shoes" component={Shoes} />
            <Route exact path="/accessory" component={Accessory} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
