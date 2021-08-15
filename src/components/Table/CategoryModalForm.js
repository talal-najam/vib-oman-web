import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core";
import { addRecord } from "../../actions";
import { useForm } from "react-hook-form";
import CustomTextField from "./CustomTextField";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
  },
  button: {
    color: theme.palette.primary.light,
  },
}));

const CategoryModal = ({ open, handleClose, heading, title, addRecord }) => {
  const classes = useStyles();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data && data.unit_count) {
      data.unit_count = parseInt(data.unit_count);
    }
    const validatedData = data;
    addRecord('categories', validatedData);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle className={classes.root} id="form-dialog-title">
          Categories {title && "- " + title}
        </DialogTitle>
        <DialogContent className={classes.root}>
          <DialogContentText>Create a new category.</DialogContentText>
          <CustomTextField
            name="name"
            label="Category Name"
            control={control}
            placeholder="Enter category name"
            autoFocus
          />
          <CustomTextField
            name="image"
            label="Category image"
            control={control}
            placeholder="URL for category logo"
          />
          <CustomTextField
            name="description"
            label="Description"
            control={control}
            placeholder="Description of the category"
          />
        </DialogContent>
        <DialogActions className={classes.root}>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
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

const mapStateToProps = (state) => ({
  products: state.app.products.data,
  isLoading: state.app.products.loading,
});

const mapDispatchToProps = {
  addRecord: addRecord,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);
