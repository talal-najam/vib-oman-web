import {
  Box,
  Button,
  ButtonBase,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { InfoDivider } from "../Util/Divider";

const useStyles = makeStyles((theme) => ({
  cartContainer: {
    background: "rgba(255,255,255,0.1)",
    padding: "1rem",
    paddingTop: "2rem",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const CartMain = ({ onGetProducts }) => {
  //   useEffect(() => {
  //     onGetProducts({ pagination: true, page: page - 1 });
  //   }, [page]);

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={classes.cartContainer}>
        <Typography variant="h5" bold>
          Shopping Basket
        </Typography>
        <Typography variant="h6">Your cart is empty :(</Typography>
        <Box my={2}>
          <Paper elevation={8} className={classes.suggestedItems}>
            <Grid container>
              <Grid item lg={4}>
                <ButtonBase
                  className={classes.cardButton}
                  component={Link}
                  to={`/products/2`}
                >
                  <Box p={2} style={{ minHeight: "100%", minWidth: "100%" }}>
                    <img
                      src="https://cdn.vox-cdn.com/thumbor/sPTCcROzbhUcQhsWtt57MikY3EM=/0x0:2500x1669/920x613/filters:focal(810x352:1210x752):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67113188/TheWitcher_101_Unit_06900_RT.fk3ph4dhp.0.jpg"
                      style={{
                        minWidth: "100%",
                        maxHeight: "200px",
                        objectFit: "cover",
                        border: "1px solid grey",
                      }}
                      alt={"Hello"}
                    />
                  </Box>
                </ButtonBase>
              </Grid>
              <Grid item lg={7}>
                <Box
                  className={classes.suggestedItemContent}
                  py={2}
                  style={{ minHeight: "100%", minWidth: "100%" }}
                >
                  <Box>
                    <Typography variant="h6">Hello</Typography>
                    <InfoDivider padding={1} />
                    <Typography variant="subtitle">Hello</Typography>
                  </Box>
                  <InfoDivider padding={1} />

                  <Box>
                    <Typography variant="h6"></Typography>
                  </Box>
                  <Box pb={1}>
                    <Button
                      variant="outlined"
                      component={Link}
                      //   to={`/products/${currentProduct.id}`}
                      style={{ width: "6rem", marginBottom: "-4px" }}
                    >
                      OMR 43
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Grid container lg={12}></Grid>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  //   cart: state.app.cart.data.results,
  loading: state.app.products.loading,
});

export default connect(mapStateToProps)(CartMain);
