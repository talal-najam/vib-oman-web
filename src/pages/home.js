import { Card, Container, Divider, Grid } from "@material-ui/core";
import React from "react";
import { Header, Carousel } from "../components";
import { makeStyles } from "@material-ui/core/styles";
import { items } from "../components/Carousel/Carousel";


const useStyles = makeStyles((theme) => ({
  divider: {
    height: '20px',
  },

}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Header>
        <Container>
          <Carousel />
        </Container>
      </Header>
      <Divider classes={classes.divider} />
      <Grid container>
        <Grid item lg={6} sm={12}>
          <Card>Hello</Card>
        </Grid>
        <Grid item lg={6} sm={12}>
          <Card>Image</Card>
        </Grid>
      </Grid>
      <Grid container direction="row-reverse">
        <Grid item lg={6} sm={12}>
          <Card>Hello</Card>
        </Grid>
        <Grid item lg={6} sm={12}>
          <Card>Image</Card>
        </Grid>
      </Grid>
    </>
  );
}
