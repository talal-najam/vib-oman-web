import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions";
import { Table } from "../index";

const ProductsTable = ({ onGetProducts, products, selection, isLoading }) => {
  useEffect(() => {
    onGetProducts({ pagination: false });
  }, [selection]);

  const columns = [
    {
      id: "name",
      disablePadding: false,
      label: "Name",
    },
    {
      id: "unit_price",
      disablePadding: false,
      label: "Price",
      type: "price",
    },
    {
      id: "short_description",
      disablePadding: false,
      label: "Short Description",
    },
    {
      id: "created_at",
      disablePadding: false,
      label: "Created at",
    },
    {
      id: "updated_at",
      disablePadding: false,
      label: "Updated at",
    },
  ];

  // TODO: Implement Skeleton table
  return (
    <>
      {isLoading ? (
        <>Loading</>
      ) : (
        products && (
          <Table rows={products} columns={columns} heading={selection} />
        )
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.app.products.data,
  isLoading: state.app.products.loading,
});

const mapDispatchToProps = {
  onGetProducts: getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsTable);
