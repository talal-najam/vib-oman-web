import React from "react";
import { Header } from "../components";
import { Cart } from "../components";
import { FooterContainer } from "../containers";

export default function LeaderBoardsPage() {
  return (
    <React.Fragment>
      <Header>
        <Cart />
      </Header>
      <FooterContainer />
    </React.Fragment>
  );
}
