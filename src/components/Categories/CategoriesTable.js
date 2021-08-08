import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../actions";
import { Table } from "../index";

const CategoriesTable = ({
  onGetCategories,
  categories,
  selection,
  isLoading,
}) => {
  useEffect(() => {
    onGetCategories();
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
        <Table rows={categories} columns={columns} heading={selection} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: state.app.categories.data,
  isLoading: state.app.categories.loading,
});

const mapDispatchToProps = {
  onGetCategories: getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesTable);
