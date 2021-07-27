import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProductCard from "./Card";
import { getProducts } from "../../actions";
import data from "./dummyData";

function Product() {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3} lg={12}>
          {data.map((product) => (
            <Grid item lg={4}>
              <ProductCard
                key={product.id}
                brandName={product.brandName}
                brandLogo={product.brandLogo}
                productTitle={product.productTitle}
                created_at={product.created_at}
                productImage={product.productImage}
                shortDescription={product.shortDescription}
                description={product.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.app.products.data,
});

const mapDispatchToProps = (dispatch) => ({
  onGetProducts: getProducts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
