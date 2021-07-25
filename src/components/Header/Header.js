import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh', //TODO: Fix this
    background:
      'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1573053986275-840ffc7cc685?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80") top left / cover no-repeat',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function ButtonAppBar({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>
            VIB ESports Oman
          </Link>
        </Typography>
        <Button color="inherit">
          <Link className={classes.link} to="/products">
            Products
          </Link>
        </Button>
        <Button color="inherit">
          <Link className={classes.link} to="/brands">
            Brands
          </Link>
        </Button>
        <Button color="inherit">
          <Link className={classes.link} to="/leaderboards">
            Leaderboards
          </Link>
        </Button>
      </Toolbar>
      <Divider />
      {children}
    </div>
  );
}
