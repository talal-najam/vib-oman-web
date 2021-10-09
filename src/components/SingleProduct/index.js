import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { getProduct } from "../../actions";
import Skeleton from "../Skeleton";
import { Link } from "react-router-dom";

const Product = ({
  onGetProduct,
  products,
  totalPages,
  loading,
  brands,
  productId,
}) => {
  useEffect(() => {
    console.log('id is', productId)
    onGetProduct(productId);
  }, []);


  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3} lg={12}>
          {loading ? (
            <Skeleton />
          ) : (
            products &&
            products.map((product) => (
              <Grid item lg={4}>
                {/* <Link> */}
                Hello
                {/* </Link> */}
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.app.product.data,
  loading: state.app.product.loading,
  brands: state.app.brands.data,
});

const mapDispatchToProps = {
  onGetProduct: getProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
