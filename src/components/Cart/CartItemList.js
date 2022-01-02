import { Fragment } from "react";
import { connect } from "react-redux";
import {
  Box,
  Button,
  ButtonBase,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import { InfoDivider } from "../Util/Divider";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { addOneItem, removeOneItem, removeFromCart } from "../../actions";

function CartItemList({
  cart,
  classes,
  onAddOneItem,
  onRemoveOneItem,
  onRemoveFromCart,
}) {
  return (
    <Fragment>
      {cart.map((cartItem) => {
        return (
          <Box
            className={classes.suggestedItemContent}
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
                  onClick={() => onRemoveFromCart("cart", cartItem.id)}
                />
              </Grid>
              <Grid item lg={9}>
                <InfoDivider padding={1} />
                <Box pb={1} className={classes.amountSection}>
                  <Typography variant="subtitle1">
                    Price: OMR {cartItem.price}
                  </Typography>
                  <Typography variant="subtitle1">
                    Total: OMR {cartItem.quantity * cartItem.price}
                  </Typography>
                </Box>
                <Box className={classes.buttonsContainer}>
                  <Button
                    size="small"
                    className={classes.button}
                    variant="contained"
                    onClick={() => {
                      cartItem.quantity <= 1
                        ? onRemoveFromCart("cart", cartItem.id)
                        : onRemoveOneItem("cart", cartItem.id);
                    }}
                  >
                    <p className={classes.quantity}>-</p>
                  </Button>
                  <Box px={16}>
                    <p className={classes.quantity}>{cartItem.quantity}</p>
                  </Box>
                  <Button
                    className={classes.button}
                    size="small"
                    variant="contained"
                    onClick={() => onAddOneItem("cart", cartItem.id)}
                  >
                    <p className={classes.quantity}>+</p>
                  </Button>
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
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  cart: state.app.cart.data,
});

const mapDispatchToProps = {
  onAddOneItem: addOneItem,
  onRemoveOneItem: removeOneItem,
  onRemoveFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemList);
