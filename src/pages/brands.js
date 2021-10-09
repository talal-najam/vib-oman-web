import React from "react";
import { Header } from "../components";
import { ProductsList } from "../components";

export default function BrandsPage() {
  return (
    <Header>
      <div style={{ margin: "20px" }}>
        <ProductsList />
      </div>
    </Header>
  );
}
