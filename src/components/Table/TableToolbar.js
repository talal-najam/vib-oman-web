import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FilterListIcon from "@material-ui/icons/FilterList";
import ProductModal from "./ProductModalForm";
import BrandModalForm from "./BrandModalForm";
import CategoryModalForm from "./CategoryModalForm";

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected, heading } = props;
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  console.log("heading", heading);

  const handleCreateClickOpen = () => {
    setShowCreate(true);
  };

  const handleCreateClose = () => {
    setShowCreate(false);
  };

  const handleEditClickOpen = () => {
    setShowEdit(true);
  };

  const handleEditClose = () => {
    setShowEdit(false);
  };

  const handleDeleteClickOpen = () => {
    setShowDelete(true);
  };

  const handleDeleteClose = () => {
    setShowDelete(false);
  };

  const handleFilterClickOpen = () => {
    setShowFilter(true);
  };

  const handleFilterClose = () => {
    setShowFilter(false);
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {heading}
        </Typography>
      )}

      <>
        <Tooltip title="Add">
          <IconButton onClick={handleCreateClickOpen} aria-label="add">
            <AddBoxIcon />
          </IconButton>
        </Tooltip>
        <ProductModal
          handleClose={handleCreateClose}
          open={heading === "Products" && showCreate}
        />
        <BrandModalForm
          handleClose={handleCreateClose}
          open={heading === "Brands" && showCreate}
        />
        <CategoryModalForm
          handleClose={handleCreateClose}
          open={heading === "Categories" && showCreate}
        />
        <Tooltip title="Edit">
          <IconButton disabled={!(numSelected === 1)} aria-label="edit">
            <EditIcon />
          </IconButton>
        </Tooltip>
        {/* <ProductModal handleClose={handleCreateClose} open={showCreate} /> */}

        <Tooltip title="Delete">
          <IconButton disabled={numSelected === 0} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        {/* <Modal open={showDelete} handleClose={handleDeleteClose} /> */}
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        {/* <Modal open={showFilter} handleClose={handleFilterClose} /> */}
      </>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired,
};

export default EnhancedTableToolbar;
