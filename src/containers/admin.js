import React, { useState } from "react";
import { Container, Typography, Divider, Toolbar } from "@material-ui/core";
import { Select } from "../components";
import ProductsTable from "../components/Product/ProductsTable";
import BrandsTable from "../components/Brands/BrandsTable";
import CategoriesTable from "../components/Categories/CategoriesTable";
import constants from "../utils/constants";

const AdminContainer = () => {
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

export default AdminContainer;
