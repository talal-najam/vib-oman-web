import React from "react";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;
