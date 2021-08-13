import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#024755",
      light: "#0497b5",
    },
    secondary: {
      main: "#566C95",
      light: "#ffffff",
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

export default theme;
