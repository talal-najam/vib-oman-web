import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBrands } from "../../actions";
import { Table } from "../index";

const BrandsTable = ({ onGetBrands, brands, selection, isLoading }) => {
  useEffect(() => {
    onGetBrands();
  }, [selection]);

  const columns = [
    {
      id: "name",
      disablePadding: false,
      label: "Name",
    },
    {
      id: "image",
      disablePadding: false,
      label: "Image",
    },
    {
      id: "description",
      disablePadding: false,
      label: "Description",
    },
    {
      id: "created_at",
      disablePadding: false,
      label: "Created at",
      type: "time",
    },
    {
      id: "updated_at",
      disablePadding: false,
      label: "Updated at",
      type: "time",
    },
  ];

  return (
    <>
      {isLoading ? (
        <>Loading</>
      ) : (
        <Table rows={brands} columns={columns} heading={selection} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  brands: state.app.brands.data,
  isLoading: state.app.brands.loading,
});

const mapDispatchToProps = {
  onGetBrands: getBrands,
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandsTable);
