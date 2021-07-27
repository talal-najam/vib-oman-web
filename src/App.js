import React from "react";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { createBrowserHistory } from "history";
import { getProducts } from "./actions";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

const history = createBrowserHistory();

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
            </Switch>
          </Router>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
