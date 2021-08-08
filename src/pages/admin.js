import React from "react";
import { Header } from "../components";
import { AdminContainer } from "../containers";

export default function BrandsPage() {
  return (
    <Header>
      <div style={{ margin: "20px" }}>
        <AdminContainer />
      </div>
    </Header>
  );
}
