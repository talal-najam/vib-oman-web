import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
}));
export default function ProductSkeleton() {
  const classes = useStyles();

  const dummyArray = [0, 0, 0, 0, 0, 0];

  return dummyArray.map((item, index) => (
    <Grid key={index} item lg={4} md={6} sm={12} xs={12}>
      <Skeleton animation="wave" height={250} className={classes.root} />
      <Skeleton animation="wave" width="60%" />
    </Grid>
  ));
}
