import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../Components/NavBar";
import LandingForm from "../Pages/Form";
import LandingCard from "../Pages/Card";

export default function Routes() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={LandingForm} />
        <Route path="/card" exact component={LandingCard} />
      </Switch>
    </>
  );
}
