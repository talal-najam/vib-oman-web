import {
  Box,
  Container,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Header, Carousel } from "../components";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers";
import { FaqsContainer } from "../containers/faqs";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles({
  social: {
    textDecoration: "none",
    color: "#c3c3c3",
    paddingRight: "3rem",
  },
  root: {
    textAlign: "center",
    justifyContent: "center",
  },
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Header particles={true}>
        <Container>
          <Carousel />
          <Typography variant="h2" bold style={{ marginTop: "2rem" }}>
            VIB Oman
          </Typography>
          <Typography variant="h5" style={{ padding: "20px 0 0 0" }}>
            Ultimate destination for all your gaming needs.
          </Typography>
          {/* <Box display="flex" style={{ width: "100%", paddingTop: "20px" }}>
            <div className={classes.root}>
              <a className={classes.social} href="www.facebook.com/gamer.janu">
                <FacebookIcon fontSize="large" />
              </a>
            </div>
            <div className={classes.root}>
            
              <a className={classes.social} href="www.facebook.com/gamer.janu">
                <InstagramIcon fontSize="large" />
              </a>
            </div>
            <div className={classes.root}>
              <a className={classes.social} href="www.facebook.com/gamer.janu">
                <WhatsAppIcon fontSize="large" />
              </a>
            </div>
            <div className={classes.root}>
              <a className={classes.social} href="www.facebook.com/gamer.janu">
                <MailOutlineIcon fontSize="large" />
              </a>
            </div>
          </Box> */}
        </Container>
      </Header>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
