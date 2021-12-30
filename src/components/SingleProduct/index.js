import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  makeStyles,
  ButtonBase,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, getProduct, getProducts } from "../../actions";
import Image from "material-ui-image";
import { getBrandNameById } from "../Product";
import { InfoDivider } from "../Util/Divider";
import constants from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  cardButton: {
    width: "100%",
  },
  suggestedItems: {
    backgroundColor: "rgba(100,100,100,0.2)",
    width: "100%",
  },
  suggestedItemContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const getTopThreeProducts = (products, brands, id, classes) => {
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  if (products && products.length > 0) {
    let randomProducts = [];
    while (randomProducts.length < 3) {
      const randIndex = randomIntFromInterval(0, products.length - 1);
      if (
        !randomProducts.includes(randIndex) &&
        products[randIndex].id !== id
      ) {
        randomProducts.push(randIndex);
      }
    }

    return randomProducts.map((productIndex) => {
      const currentProduct = products[productIndex];
      const productFullname =
        getBrandNameById(currentProduct.brand_id, brands) +
        " " +
        currentProduct.name;
      return (
        <Box my={2} key={productIndex}>
          <Paper elevation={8} className={classes.suggestedItems}>
            <Grid container>
              <Grid item lg={4}>
                <ButtonBase
                  className={classes.cardButton}
                  component={Link}
                  to={`/products/${currentProduct.id}`}
                >
                  <Box p={2} style={{ minHeight: "100%", minWidth: "100%" }}>
                    <img
                      src={currentProduct.small_image}
                      style={{
                        minWidth: "100%",
                        maxHeight: "200px",
                        objectFit: "cover",
                        border: "1px solid grey",
                      }}
                      alt={productFullname}
                    />
                  </Box>
                </ButtonBase>
              </Grid>
              <Grid item lg={8}>
                <Box
                  className={classes.suggestedItemContent}
                  py={2}
                  style={{ minHeight: "100%", minWidth: "100%" }}
                >
                  <Box>
                    <Typography variant="h6">{productFullname}</Typography>
                    <InfoDivider padding={1} />
                    <Typography variant="subtitle">
                      {currentProduct.short_description}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6"></Typography>
                  </Box>
                  <Box pb={1}>
                    <Button
                      variant="outlined"
                      component={Link}
                      to={`/products/${currentProduct.id}`}
                      style={{ width: "6rem", marginBottom: "-4px" }}
                    >
                      OMR {currentProduct.unit_price}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      );
    });
  }
  return null;
};

const menuItems = () => {
  const result = [];
  for (let i = 1; i <= constants.MAX_QUANTITY_LIMIT; i++) {
    result.push(<MenuItem value={i}>{i}</MenuItem>);
  }
  return result;
};

const Product = ({
  onGetProduct,
  onGetProducts,
  onAddToCart,
  product,
  products,
  loading,
  brands,
  productId,
}) => {
  useEffect(() => {
    onGetProduct(productId);
    onGetProducts();
  }, [productId, onGetProduct, onGetProducts]);

  const [quantity, setQuantity] = React.useState("");

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const classes = useStyles();
  const menuItemsOptions = menuItems();
  console.log("menuItemOptions", menuItemsOptions);

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
            imageStyle={{ border: "1px solid grey" }}
          />
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
              <Box pb={2} px={4} sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Quantity
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={quantity}
                    label="Quantity"
                    onChange={handleChange}
                  >
                    {menuItemsOptions}
                  </Select>
                </FormControl>
              </Box>
              <Box pb={2} px={4}>
                <Button
                  variant="contained"
                  onClick={() => onAddToCart("cart", product, quantity)}
                >
                  Add to cart
                </Button>
              </Box>
            </Paper>
          </Box>
        </Grid>

        <Grid lg={12}>
          <InfoDivider padding={8} />
          <Box>
            <Box>
              <Typography variant="h6">People also viewed:</Typography>
            </Box>
            <Box>
              {getTopThreeProducts(products, brands, product.id, classes)}
            </Box>
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
  products: state.app.products.data,
  loading: state.app.product.loading,
  brands: state.app.brands.data,
});

const mapDispatchToProps = {
  onGetProduct: getProduct,
  onGetProducts: getProducts,
  onAddToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
