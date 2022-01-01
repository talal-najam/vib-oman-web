import {
  Box,
  ButtonBase,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { InfoDivider } from "../Util/Divider";

const useStyles = makeStyles((theme) => ({
  cartContainer: {
    background: "rgba(255,255,255,0.1)",
    padding: "1rem",
    paddingTop: "2rem",
    marginTop: "1rem",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  emptyCart: {
    height: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  amountSection: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "0",
  },
  suggestedItems: {
    background: "rgba(0,0,0,0.4)",
  },
  cartImage: {
    width: "100%",
    padding: "1rem 0",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  headerSection: {
    display: "flex",
    justifyContent: "space-between",
  },
  removeIcon: {
    color: "#880000",
    cursor: "pointer",
  },
}));

const CartMain = ({ cart }) => {
  const calculateTotal = (items) => {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const classes = useStyles();
  console.log("cart in checkout page", cart);

  return (
    <Container maxWidth="lg">
      <div className={classes.cartContainer}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          Shopping Basket
        </Typography>
        <InfoDivider padding={4} />
        {cart && cart.length > 0 ? (
          <Box mb={2} className={classes.filledCartContainer}>
            <Paper elevation={8} className={classes.suggestedItems}>
              <Box p={2}>
                {cart.map((cartItem) => {
                  return (
                    <Box
                      className={classes.suggestedItemContent}
                      py={1}
                      px={1}
                      style={{ minHeight: "100%", minWidth: "100%" }}
                    >
                      <Grid
                        container
                        key={cartItem.id}
                        className={classes.singleItemContainer}
                      >
                        <Grid item xs={12} className={classes.headerSection}>
                          <Typography variant="h5">{cartItem.name}</Typography>
                          <RemoveCircleOutlineIcon
                            className={classes.removeIcon}
                            sx={{
                              ":hover": {
                                color: "red",
                                transition: "color 250ms ease-in-out",
                              },
                            }}
                          />
                        </Grid>
                        <Grid item lg={9}>
                          <InfoDivider padding={1} />
                          <Box pb={1} className={classes.amountSection}>
                            <Typography variant="subtitle1">
                              Price: OMR {cartItem.price}
                            </Typography>
                            <Typography variant="subtitle1">
                              Quantity: {cartItem.quantity}
                            </Typography>
                            <Typography variant="subtitle1">
                              Total: OMR {cartItem.quantity * cartItem.price}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item lg={3}>
                          <ButtonBase
                            className={classes.cardButton}
                            component={Link}
                            to={`/products/2`}
                          >
                            <Box pl={2} className={classes.imageContainer}>
                              <img
                                src={cartItem.image}
                                className={classes.cartImage}
                                alt={"Hello"}
                              />
                            </Box>
                          </ButtonBase>
                        </Grid>
                      </Grid>
                    </Box>
                  );
                })}
                <InfoDivider padding={2} />
                <h2>Total: OMR {calculateTotal(cart)}</h2>
              </Box>
            </Paper>
          </Box>
        ) : (
          <Box className={classes.emptyCart}>
            <Typography variant="h5">Your cart is empty :(</Typography>
          </Box>
        )}

        <Grid container lg={12}></Grid>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.app.cart.data,
  loading: state.app.products.loading,
});

export default connect(mapStateToProps)(CartMain);
