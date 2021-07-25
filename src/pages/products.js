import React from "react";
import { Header } from "../components";
import { Product } from "../components/Product";

export default function Home() {
  return (
    <Header>
      <div style={{ margin: "20px" }}>
        <Product />
      </div>
    </Header>
  );
}
