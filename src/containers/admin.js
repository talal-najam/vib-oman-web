import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Container,
  Typography,
  Divider,
  Button,
  Toolbar,
} from "@material-ui/core";
import { Select } from "../components";
import { getBrands, getProducts, getCategories } from "../actions";
import ProductsTable from "../components/Product/ProductsTable";
import BrandsTable from "../components/Brands/BrandsTable";
import CategoriesTable from "../components/Categories/CategoriesTable";
import constants from "../utils/constants";

const AdminContainer = ({ products, brands, onGetBrands, onGetProducts }) => {
  const [selection, setSelection] = useState("Categories");

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
          choices={constants.ADMIN_TAB_CHOICES}
          selection={selection}
          setSelection={setSelection}
        />
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
