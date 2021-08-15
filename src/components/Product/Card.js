import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ButtonBase } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    maxWidth: 500,
    background: "hsla(189, 95%, 7%, 1)",

    background:
      "linear-gradient(90deg, hsla(189, 95%, 7%, 1) 0%, hsla(191, 94%, 7%, 1) 100%)",

    background:
      "-moz-linear-gradient(90deg, hsla(189, 95%, 7%, 1) 0%, hsla(191, 94%, 7%, 1) 100%)",

    background:
      "-webkit-linear-gradient(90deg, hsla(189, 95%, 7%, 1) 0%, hsla(191, 94%, 7%, 1) 100%)",

    filter:
      'progid: DXImageTransform.Microsoft.gradient( startColorstr="#011F24", endColorstr="#011C22", GradientType=1 )',
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  brand: {
    height: "100%",
  },
  cardButton: {
    display: "block",
    textAlign: "initial",
    height: "100%",
    width: "100%",
  },
}));

export default function ProductCard({
  id,
  brandLogo,
  productTitle,
  created_at,
  productImage,
  shortDescription,
  brandName,
  description,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} square>
      <ButtonBase
        className={classes.cardButton}
        component={Link}
        to={`products/${id}`}
      >
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              defaultValue=""
              className={classes.avatar}
            >
              <img src={brandLogo} className={classes.brand} alt="Brand logo" />
            </Avatar>
          }
          title={brandName && brandName.toUpperCase()}
          subheader={productTitle}
        />
        <CardMedia
          className={classes.media}
          image={productImage}
          title={productTitle}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {shortDescription}
          </Typography>
        </CardContent>
      </ButtonBase>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
