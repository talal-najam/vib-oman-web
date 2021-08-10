import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core";
import { addProduct} from '../../actions';
import { useForm } from "react-hook-form";
import CustomTextField from "./CustomTextField";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
  },
  button: {
    color: theme.palette.primary.light,
  },
}));

const ProductModal = ({ open, handleClose, title }) => {
  const classes = useStyles();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    const validatedData = data; //TODO: Add form validation
    addProduct(validatedData);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle className={classes.root} id="form-dialog-title">
          Product {title && "- " + title}
        </DialogTitle>
        <DialogContent className={classes.root}>
          <DialogContentText>Create a new product.</DialogContentText>
          <CustomTextField
            name="name"
            label="Name"
            control={control}
            placeholder="Enter product name"
            autoFocus
          />
          <CustomTextField
            name="small_image"
            label="Small Image"
            control={control}
            placeholder="Small product image URL"
          />

          <CustomTextField
            name="medium_image"
            label="Medium Image"
            control={control}
            placeholder="Medium product image URL"
          />

          <CustomTextField
            name="large_image"
            label="Large Image"
            control={control}
            placeholder="Large product image URL"
          />

          <CustomTextField
            name="unit_price"
            label="Unit price"
            type="number"
            control={control}
            placeholder="Price of a single product unit"
          />

          <CustomTextField
            name="alt_price"
            label="Alt price"
            type="number"
            control={control}
            placeholder="Alt price of a single product unit"
          />
          <CustomTextField
            name="unit_count"
            label="Unit count"
            type="number"
            control={control}
            placeholder="Unit count"
          />

          <CustomTextField
            name="short_description"
            label="Short description"
            control={control}
            placeholder="Short description of the product"
          />
          <CustomTextField
            name="description"
            label="Description"
            control={control}
            placeholder="Description of the product"
          />
          <CustomTextField
            name="featured"
            label="Featured"
            control={control}
            placeholder="Is this a Featured product?"
          />
          <CustomTextField
            name="brand"
            label="Brand ID"
            control={control}
            placeholder="Enter Brand ID of the product"
          />
        </DialogContent>
        <DialogActions className={classes.root}>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ProductModal;
