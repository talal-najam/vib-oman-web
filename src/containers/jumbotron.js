import React from "react";
import jumboData from "../fixtures/jumbo.json";
import { Jumbotron } from "../components";
import ScrollAnimation from "react-animate-on-scroll";

const isEven = (n) => n % 2 === 0;

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item, index) => (
        <ScrollAnimation
          // animateIn={isEven(index) ? "fadeIn" : "fadeIn"}
          animateIn={isEven(index) ? "bounceInRight" : "bounceInLeft"}
          animateOnce
          duration={1.5}
        >
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane center={true}>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        </ScrollAnimation>
      ))}
    </Jumbotron.Container>
  );
}
