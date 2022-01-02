import { useState, Fragment } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { InfoDivider } from "../Util/Divider";
import CartItemList from "./CartItemList";
import CartForm from "./CartForm";
import CartReview from "./CartReview";
import CartConfirmation from "./CartConfirmation";

const steps = ["Review Basket", "Order Details", "Confirm Order"];
const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
  buttonsContainer: {
    display: "flex",
    height: "60%",
    alignItems: "end",
  },
  button: {
    height: "3rem",
    width: "5rem",
  },
  quantity: {
    fontSize: "1rem",
  },
  stepper: {
    // background: "rgba(0,0,0,0.4)",
    background: "none",
  },
  reviewValue: {
    fontWeight: "bold",
    marginLeft: "1rem",
  },
  confirmationContainer: {
    display: "flex",
    padding: '2rem 0'
  },
  confirmationText: {
    margin: "0 0 1rem 1rem",
  },
  confirmationIcon: {
    // marginTop: '4px',
    color: 'green',
  }
}));

const CartMain = ({ cart }) => {
  const calculateTotal = (items) => {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const [checkoutState, setCheckoutState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    isReviewed: false,
  });

  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleCheck = (e) => {
    setCheckoutState({
      ...checkoutState,
      isReviewed: e.target.checked,
    });
  };

  console.log("CHECKOUT STATE IS", checkoutState);

  const isCartFormFilled = () => {
    const { name, email, phone, isReviewed } = checkoutState;
    if (
      activeStep === 1 &&
      (name === null ||
        name === "" ||
        email === null ||
        email === "" ||
        phone === null ||
        phone === "")
    ) {
      return false;
    } else if (activeStep === steps.length - 1 && !isReviewed) {
      return false;
    }
    return true;
  };

  let currentContent;

  switch (activeStep) {
    case 0:
      currentContent = <CartItemList cart={cart} classes={classes} />;
      break;
    case 1:
      currentContent = (
        <CartForm
          cart={cart}
          checkoutState={checkoutState}
          setCheckoutState={setCheckoutState}
        />
      );
      break;
    case 2:
      currentContent = (
        <CartReview
          cart={cart}
          checkoutState={checkoutState}
          setCheckoutState={setCheckoutState}
          classes={classes}
        />
      );
      break;
    case 3:
      currentContent = <CartConfirmation classes={classes} />;
      break;
    default:
      currentContent = null;
      break;
  }

  return (
    <Container maxWidth="lg">
      <div className={classes.cartContainer}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          Shopping Basket
        </Typography>
        <InfoDivider padding={2} />

        {cart && cart.length > 0 ? (
          <Box mb={2} className={classes.filledCartContainer}>
            {/* Stepper */}
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Box>
            <Paper elevation={8} className={classes.suggestedItems}>
              <Box p={3}>
                {currentContent}
                <InfoDivider padding={2} />
                {activeStep === steps.length - 1 && (
                  <Box>
                    <Checkbox {...label} onChange={handleCheck} />{" "}
                    <span>
                      I confirm that I've reviewed the cart and the information
                      I've provided is accurate.
                    </span>
                  </Box>
                )}

                {activeStep === steps.length ? (
                  <Fragment>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button onClick={handleReset}>Reset</Button>
                    </Box>
                  </Fragment>
                ) : (
                  <Fragment>
                    <h2>Total: OMR {calculateTotal(cart)}</h2>

                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Button
                        variant="outlined"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button
                        variant="outlined"
                        type="button"
                        onClick={handleNext}
                        disabled={!isCartFormFilled()}
                      >
                        {activeStep === steps.length - 1 ? "Order Now" : "Next"}
                      </Button>
                    </Box>
                  </Fragment>
                )}
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
});

export default connect(mapStateToProps)(CartMain);
