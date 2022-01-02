import { InfoDivider } from "../Util/Divider";
import { Box, Grid, Typography } from "@material-ui/core";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function CartReview({ classes }) {
  return (
    <div className={classes.confirmationContainer}>
      <CheckCircleIcon className={classes.confirmationIcon} fontSize="large" />
      <h2 className={classes.confirmationText}>
        Thank for ordering with us. Your order has been successfully placed on {new Date().toLocaleString()}
      </h2>
    </div>
  );
}

export default CartReview;
