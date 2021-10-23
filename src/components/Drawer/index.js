import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import constants from "../../utils/constants";

const { NAV_LINKS } = constants;

export default function SwipeableTemporaryDrawer({ iconStyle }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* <List>

      <Box p={2}>
        <ListItem button  component={Link} to="/">
                <Typography align="center">VIP Esports Oman</Typography>
              </ListItem>
      </Box>
      </List> */}

      <List>
        <ListItem button component={Link} to="/">
          <ListItemText>
            <Typography align="center">VIP Esports Oman</Typography>
          </ListItemText>
        </ListItem>
      </List>

      <Divider />
      <List>
        {NAV_LINKS.map(
          (navObj, index) =>
            navObj.active &&
            !navObj.adminOnly && (
              <ListItem button key={index} component={Link} to={navObj.route}>
                <ListItemIcon>{navObj.icon}</ListItemIcon>
                <ListItemText primary={navObj.label} />
              </ListItem>
            )
        )}
      </List>
      <Divider />
      <List>
        {NAV_LINKS.map(
          (navObj, index) =>
            navObj.active &&
            navObj.adminOnly && (
              <ListItem button key={index} component={Link} to={navObj.route}>
                <ListItemIcon>{navObj.icon}</ListItemIcon>
                <ListItemText primary={navObj.label} />
              </ListItem>
            )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <IconButton
          edge="start"
          className={iconStyle}
          onClick={toggleDrawer(true)}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor={"left"}
          open={isOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
