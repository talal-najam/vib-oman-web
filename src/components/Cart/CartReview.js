import { InfoDivider } from "../Util/Divider";
import { Box, Grid, Typography } from "@material-ui/core";

function CartReview({ cart, checkoutState, setCheckoutState, classes }) {
  return (
    <div>
      <h2>Order Details</h2>
      <InfoDivider padding={1} />
      <Box pb={2}>
        <Grid container>
          <Grid item lg={1}>
            <Typography>Name: </Typography>
            <Typography>Email: </Typography>
            <Typography>Contact: </Typography>
            <Typography>Address: </Typography>
          </Grid>
          <Grid item lg={5}>
            <Typography>
              <span className={classes.reviewValue}>{checkoutState.name}</span>
            </Typography>
            <Typography>
              <span className={classes.reviewValue}>{checkoutState.email}</span>
            </Typography>
            <Typography>
              <span className={classes.reviewValue}>{checkoutState.phone}</span>
            </Typography>
            <Typography>
              <span className={classes.reviewValue}>
                {checkoutState.address}
              </span>
            </Typography>
          </Grid>
          <Grid item lg={6}>
            <ul style={{ margin: "0" }}>
              {cart.map((cartItem, index) => (
                <li key={index}>
                  <h4 style={{ marginTop: "0" }}>
                    {cartItem.quantity}x {cartItem.name} = OMR{" "}
                    {cartItem.quantity * cartItem.price}
                  </h4>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default CartReview;
