import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import { Link } from "./../util/router";

const useStyles = makeStyles((theme) => ({
  container: {},
  media: {
    [theme.breakpoints.up("xs")]: {
      height: 170,
    },
    [theme.breakpoints.up("sm")]: {
      height: 220,
    },
    [theme.breakpoints.up("md")]: {
      height: 220,
    },
    [theme.breakpoints.up("lg")]: {
      height: 300,
    },
  },
  card: {
    borderRadius: 15,
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  divider: {
    margin: "15px 0",
  },
  name: {
    textDecoration: "none",
    display: "block",
    fontWeight: "400",
    textAlign: "left",
  },
  price: {
    textDecoration: "none",
  },
  nftname: {
    textDecoration: "none",
  },
  left: {
    [theme.breakpoints.up("xs")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
    },
  },
}));

function ContentCardsSection(props) {
  const classes = useStyles();

  const items = [
    {
      image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
      title: "Polychain Monsters",
      titleurl: "/collection/:section",
      url: "/items",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/BkmdKnuAZtw/800x600",
      title: "Polychain Monsters",
      titleurl: "/collection/:section",
      url: "/items",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      title: "Polychain Monsters",
      titleurl: "/collection/:section",
      url: "/items",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
      title: "Polychain Monsters",
      titleurl: "/collection/:section",
      url: "/items",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
      title: "Polychain Monsters",
      titleurl: "/collection/:section",
      url: "/items",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/BkmdKnuAZtw/800x600",
      title: "Polychain Monsters",
      titleurl: "/collection/:section",
      url: "/items",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      title: "Polychain Monsters",
      titleurl: "/collection/:section",
      url: "/items",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
      title: "Polychain Monsters",
      titleurl: "/collection/:section",
      url: "/items",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className={classes.container}>
        <Grid container={true} spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={6} sm={6} md={3} lg={3} key={index}>
              <Card className={classes.card}>
                <CardActionArea component={Link} to={item.url}>
                  <CardMedia
                    image={item.image}
                    title={item.name}
                    className={classes.media}
                  />
                  <CardContent>
                    <Typography
                      component={Link}
                      to={item.titleurl}
                      variant="h3"
                      color="textPrimary"
                      gutterBottom={true}
                      className={classes.name}
                    >
                      {item.title}
                    </Typography>
                    <Grid container={true} spacing={2} alignItems="center">
                      <Grid item={true} xs={12} sm={6} md={6} align="left">
                        <Typography
                          component={Link}
                          to={item.url}
                          variant="h3"
                          color="textSecondary"
                          className={classes.nftname}
                        >
                          {item.nftname}
                        </Typography>
                      </Grid>
                      <Grid
                        item={true}
                        xs={12}
                        sm={6}
                        md={6}
                        align="right"
                        className={classes.left}
                      >
                        <Typography
                          component={Link}
                          to={item.url}
                          variant="body2"
                          color="primary"
                          className={classes.price}
                        >
                          {item.price}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid container={true} spacing={2} alignItems="center">
                      <Grid item={true} xs={12} sm={6} md={6} align="left">
                        <Button
                          component={Link}
                          to={item.url}
                          variant="contained"
                          color="primary"
                          size="small"
                        >
                          Bid
                        </Button>
                      </Grid>
                      <Grid
                        item={true}
                        xs={12}
                        sm={6}
                        md={6}
                        align="right"
                        className={classes.left}
                      >
                        <Typography variant="body2" component="p">
                          {item.time}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default ContentCardsSection;
