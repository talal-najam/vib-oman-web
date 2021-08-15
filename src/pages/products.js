import React from "react";
import { Header } from "../components";
import { Product } from "../components/Product";
import { FooterContainer } from "../containers";
import { useParams } from 'react-router-dom';

export default function ProductsPage({ match }) {
  const { id } = useParams();
  return (
    <>
      <Header>
        {id ? (
          <p>Hello World</p>
        ) : (
          <div style={{ margin: "20px" }}>
            <Product />
          </div>
        )}
      </Header>
      <FooterContainer />
    </>
  );
}
