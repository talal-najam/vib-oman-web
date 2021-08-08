import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductCard from "./Card";
import { getProducts } from "../../actions";
import Skeleton from "../Skeleton";

const getBrandNameById = (id, brands) => {
  if (brands && brands.length > 0) {
    for (let i = 0; i < brands.length; i++) {
      if (brands[i].id === id) {
        return brands[i].name;
      }
    }
  }
};

const getBrandLogoById = (id, brands) => {
  if (brands && brands.length > 0) {
    for (let i = 0; i < brands.length; i++) {
      if (brands[i].id === id) {
        return brands[i].image;
      }
    }
  }
};

const Product = ({ onGetProducts, products, loading, brands }) => {
  useEffect(() => {
    onGetProducts();
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3} lg={12}>
          {loading ? (
            <Skeleton />
          ) : (
            products.map((product) => (
              <Grid item lg={4}>
                <ProductCard
                  key={product.id}
                  brandName={getBrandNameById(product.brand_id, brands)}
                  brandLogo={getBrandLogoById(product.brand_id, brands)}
                  productTitle={product.name}
                  created_at={new Date(product.created_at)}
                  productImage={product.large_image}
                  shortDescription={product.short_description}
                  description={product.description}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.app.products.data,
  loading: state.app.products.loading,
  brands: state.app.brands.data,
});

const mapDispatchToProps = {
  onGetProducts: getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
