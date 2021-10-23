import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  Divider,
} from "@material-ui/core";
import { connect } from "react-redux";
import { getProduct } from "../../actions";
import Image from "material-ui-image";
import { getBrandNameById } from "../Product";

const InfoDivider = ({ padding = 2 }) => {
  return (
    <Box py={padding}>
      <Divider />
    </Box>
  );
};

const Product = ({ onGetProduct, product, loading, brands, productId }) => {
  useEffect(() => {
    onGetProduct(productId);
  }, [productId, onGetProduct]);

  return !loading && product ? (
    <Container maxWidth="lg">
      <Box py={4}>
        <Typography variant="h4">{product.name}</Typography>
      </Box>
      <Grid container>
        <Grid item lg={7}>
            <Image 
              src={product.large_image} 
              aspectRatio={1.6} 
              cover={true} 
              imageStyle={{border: '1px solid grey'}} />
        </Grid>
        <Grid item lg={5}>
          <Box ml={2}>
            <Paper elevation={3}>
              <Box py={2} px={4}>
                <Typography variant="h4">
                  {getBrandNameById(product.brand_id, brands)} {product.name}
                </Typography>
                <InfoDivider />
                <Typography>{product.short_description}</Typography>
                <InfoDivider />
                <Typography variant="h6">
                  Price: OMR {product.unit_price}
                </Typography>
                <InfoDivider />
                <Typography variant="caption">{product.description}</Typography>
              </Box>
              <InfoDivider />
              <Box pb={2} px={4}>
                <Button variant="contained">Add to cart</Button>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <p>Loading...</p>
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
