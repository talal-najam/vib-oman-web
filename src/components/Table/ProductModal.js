import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core";

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

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle className={classes.root} id="form-dialog-title">
        Product {title && "- " + title}
      </DialogTitle>
      <DialogContent className={classes.root}>
        <DialogContentText>Create a new product.</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          placeholder="Name"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="small_image"
          label="Small Image"
          placeholder="Small Image"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="medium_image"
          label="Medium Image"
          placeholder="Medium Image"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="large_image"
          label="Large Image"
          placeholder="Large Image"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="unit_price"
          label="Unit Price"
          placeholder="Unit Price"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="alt_price"
          label="Alt Price"
          placeholder="Alt Price"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="unit_count"
          label="Unit Count"
          placeholder="Unit Count"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="short_description"
          label="Short Description"
          placeholder="Short Description"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="description"
          label="Description"
          placeholder="Description"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="featured"
          label="Featured"
          placeholder="Featured"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="brand"
          label="Brand"
          type="brand"
          fullWidth
        />
      </DialogContent>
      <DialogActions className={classes.root}>
        <Button onClick={handleClose} variant="contained" color="secondary">
          Cancel
        </Button>
        <Button onClick={handleClose} variant="contained" color="secondary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductModal;
