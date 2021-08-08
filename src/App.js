import React from "react";
import HomePage from "./pages/home";
import {
  AdminPage,
  ProductsPage,
  BrandsPage,
  LeaderboardsPage,
  RecordFormPage,
} from "./pages/";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { createBrowserHistory } from "history";
import { getBrands } from "./actions";
import "./index.css";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#024755",
      light: "#0497b5",
    },
    secondary: {
      main: '#566C95',
      light: '#ffffff'
    },
    type: "dark",
    background: {
      default: "black",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"],
  },
});

const history = createBrowserHistory();

store.dispatch(getBrands());

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter history={history}>
          <Router>
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
          </Router>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
