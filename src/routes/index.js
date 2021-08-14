import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/home";
import {
  AdminPage,
  ProductsPage,
  BrandsPage,
  LeaderboardsPage,
  RecordFormPage,
} from "../pages/";

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="/products" exact>
      <ProductsPage />
    </Route>
    <Route path="/brands" exact>
      <BrandsPage />
    </Route>
    <Route path="/leaderboards" exact>
      <LeaderboardsPage />
    </Route>
    <Route path="/admin" exact>
      <AdminPage />
    </Route>
    <Route path="/products/create" exact>
      <RecordFormPage type="products" />
    </Route>
    <Route path="/brands/create" exact>
      <RecordFormPage type="brands" />
    </Route>
    <Route path="/categories/create" exact>
      <RecordFormPage type="categories" />
    </Route>
  </Switch>
);

export default Routes;
