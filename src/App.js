import React, { useEffect } from "react";
import "./App.scss";

import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { checkUserStatus } from "./redux/user/user.action";

import { selectCurrentUser } from "./redux/user/user.selector";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout/checkout.component";

import Header from "./components/header/header.components";

const App = ({ checkUserStatus, currentUser }) => {
  useEffect(() => {
    checkUserStatus();
  }, [checkUserStatus]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserStatus: () => dispatch(checkUserStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
