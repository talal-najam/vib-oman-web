import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import ProductCard from "./Card";
import { getProducts } from "../../actions";
import Skeleton from "../Skeleton";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";

export const getBrandNameById = (id, brands) => {
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

const Product = ({ onGetProducts, products, totalPages, loading, brands }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    onGetProducts({ pagination: true, page: page - 1 });
  }, [page]);

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
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    brandName={getBrandNameById(product.brand_id, brands)}
                    brandLogo={getBrandLogoById(product.brand_id, brands)}
                    productTitle={product.name}
                    created_at={new Date(product.created_at)}
                    productImage={product.large_image}
                    shortDescription={product.short_description}
                    description={product.description}
                  />
                {/* </Link> */}
              </Grid>
            ))
          )}
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ padding: "5rem 0" }}
        >
          <Grid item>
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.app.products.data.results,
  totalPages: state.app.products.data.totalPages,
  loading: state.app.products.loading,
  brands: state.app.brands.data,
});

const mapDispatchToProps = {
  onGetProducts: getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
