import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { createBrowserHistory } from "history";
import { getBrands, getCategories } from "./actions";
import "./index.css";
import Routes from "./routes";
import theme from "./theme";

const history = createBrowserHistory();

// Get meta data
store.dispatch(getBrands());
store.dispatch(getCategories());

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter history={history}>
          <Router>
            <Routes />
          </Router>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
