import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import "./carousel.css";
import { Box } from "@material-ui/core";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";

function Banner(props) {
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>
        <Box justifyContent="flex-end">
          <Button variant="outlined" className="ViewButton">
            {props.item.Button}
          </Button>
        </Box>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}

export const items = [
  {
    Name: "Latest Deals!",
    Caption: "Premium Products - Best Prices!",
    Button: "Shop Now",
    contentPosition: "right",
    Items: [
      {
        Name: "Custom Rigs",
        Image:
          "https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=656&q=80",
      },
      {
        Name: "Shop Razer",
        Image:
          "https://images.unsplash.com/photo-1566055972289-c52022ae23b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      },
    ],
  },
  {
    Name: "The Ultimate Gaming Zone",
    Caption: "Game in our modern lounges across Oman",
    Button: "View More",
    contentPosition: "middle",
    Items: [
      {
        Name: "Premium Lounges",
        Image:
          "https://images.unsplash.com/photo-1624138149925-6c1dd2d60460?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        Name: "Team Rooms",
        Image:
          "https://images.unsplash.com/photo-1598550489906-85edc42981c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
    ],
  },
  {
    Name: "Join the Community",
    Caption: "Sign up now and interact with gamers from across Oman",
    Button: "Sign Up",
    contentPosition: "left",
    Items: [
      {
        Name: "Exclusive Leaderboard",
        Image:
          "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      },
      {
        Name: "Tournaments",
        Image:
          "https://images.unsplash.com/photo-1558008258-3256797b43f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      },
    ],
  },
];

class BannerExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      animation: "fade",
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: true,
      navButtonsAlwaysInvisible: false,
      cycleNavigation: true,
    };

    autoBind(this);
  }

  toggleAutoPlay() {
    this.setState({
      autoPlay: !this.state.autoPlay,
    });
  }

  toggleIndicators() {
    this.setState({
      indicators: !this.state.indicators,
    });
  }

  toggleNavButtonsAlwaysVisible() {
    this.setState({
      navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible,
    });
  }

  toggleNavButtonsAlwaysInvisible() {
    this.setState({
      navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible,
    });
  }

  toggleCycleNavigation() {
    this.setState({
      cycleNavigation: !this.state.cycleNavigation,
    });
  }

  changeAnimation(event) {
    this.setState({
      animation: event.target.value,
    });
  }

  changeTimeout(event, value) {
    this.setState({
      timeout: value,
    });
  }

  render() {
    return (
      <div style={{ marginTop: "25px", color: "#ffffff" }}>
        <Carousel
          className="Example"
          autoPlay={this.state.autoPlay}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
          cycleNavigation={this.state.cycleNavigation}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
          navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
        >
          {items.map((item, index) => {
            return (
              <Banner
                item={item}
                key={index}
                contentPosition={item.contentPosition}
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default BannerExample;
