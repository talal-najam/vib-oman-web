import { Container } from "@material-ui/core";
import React from "react";
import { Header, Carousel } from "../components";

export default function Home() {
  return (
    <Header>
        <Container>
            <Carousel />
        </Container>
    </Header>
  );
}
