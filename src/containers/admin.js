import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Container,
  Typography,
  Divider,
  Button,
  Toolbar,
  makeStyles
} from "@material-ui/core";
import { Table, Select } from "../components";
import { getBrands, getProducts, getCategories } from "../actions";
import ProductsTable from "../components/Product/ProductsTable";
import BrandsTable from "../components/Brands/BrandsTable";
import CategoriesTable from "../components/Categories/CategoriesTable";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: '1rem'
  },
}));

const choices = ["Brands", "Products", "Categories"];

const AdminContainer = ({ products, brands, onGetBrands, onGetProducts }) => {
  const [selection, setSelection] = useState("Brands");
  const [rows, setRows] = useState([]);

  const classes = useStyles();


  let resultTable;

  if (selection === "Brands") {
    resultTable = <BrandsTable selection={selection} />;
  } else if (selection === "Products") {
    resultTable = <ProductsTable selection={selection} />;
  } else if (selection === "Categories") {
    resultTable = <CategoriesTable selection={selection} />;
  }

  return (
    <Container>
      <Typography variant="h4">Admin Dashboard </Typography>
      <Divider />
      <Toolbar disableGutters>
        <Select
          choices={choices}
          selection={selection}
          setSelection={setSelection}
        />
        <Button variant="contained" className={classes.button} color="primary">
          Create
        </Button>
      </Toolbar>

      {resultTable}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  products: state.app.products.data,
  brands: state.app.brands.data,
  categories: state.app.categories.data,
});

const mapDispatchToProps = {
  onGetProducts: getProducts,
  onGetBrands: getBrands,
  onGetCategories: getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
