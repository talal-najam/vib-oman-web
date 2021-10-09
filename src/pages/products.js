import React from "react";
import { Header } from "../components";
import { ProductsList } from "../components";
import { FooterContainer } from "../containers";
import { useParams } from "react-router-dom";
import { SingleProduct } from "../components";

export default function ProductsPage({ match }) {
  const { id } = useParams();
  return (
    <>
      <Header>
        {id ? (
          <SingleProduct productId={id} />
        ) : (
          <div style={{ margin: "20px" }}>
            <ProductsList />
          </div>
        )}
      </Header>
      <FooterContainer />
    </>
  );
}
