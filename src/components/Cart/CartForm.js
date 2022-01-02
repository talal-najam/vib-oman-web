import { InfoDivider } from "../Util/Divider";
import { Box, Grid, TextField } from "@material-ui/core";
import Alert from "@mui/material/Alert";

function CartForm({ cart, checkoutState, setCheckoutState }) {
  const handleChange = (e) => {
    setCheckoutState({
      ...checkoutState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Order Details</h2>
      <InfoDivider padding={1} />
      <Box pb={2}>
        <Alert severity="warning" variant="filled">
          Please ensure all information provided is accurate. Once an order is
          placed — a member of our team will reach out to you on<strong> the number provided below</strong>
        </Alert>
      </Box>
      <Grid container spacing={8}>
        <Grid item lg={6}>
          <TextField
            label="Name"
            name="name"
            placeholder="Your name"
            onChange={handleChange}
            fullWidth
            value={checkoutState.name}
            autoFocus={true}
            margin="dense"
          />
          <TextField
            label="Email Address"
            name="email"
            onChange={handleChange}
            placeholder="Your email address"
            value={checkoutState.email}
            fullWidth
            margin="dense"
          />
        </Grid>
        <Grid item lg={6}>
          <TextField
            label="Contact Number"
            name="phone"
            onChange={handleChange}
            placeholder="Your phone number"
            value={checkoutState.phone}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Address (Optional)"
            onChange={handleChange}
            name="address"
            value={checkoutState.address}
            placeholder="Your address"
            fullWidth
            margin="dense"
          />
        </Grid>
      </Grid>
      <InfoDivider padding={2} />
      <h2>Your Basket:</h2>
      <ul>
        {cart.map((cartItem, index) => (
          <li key={index}>
            <h4>
              {cartItem.quantity}x {cartItem.name} = OMR{" "}
              {cartItem.quantity * cartItem.price}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartForm;
