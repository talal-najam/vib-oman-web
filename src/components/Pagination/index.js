import React from "react";
import Pagination from "@material-ui/lab/Pagination";

export default function PaginationControlled({ page, setPage, totalPages }) {
  const handleChange = (event, value) => {
    setPage(value);
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  };

  return <Pagination count={totalPages} page={page} onChange={handleChange} />;
}
