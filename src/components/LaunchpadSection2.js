import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import LaunchpadSectionHeader from "./LaunchpadSectionHeader";
import { Link } from "./../util/router";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "95%",
  },
  media: {
    width:'100%',
    objectFit:'cover',
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
  },
  price: {
    textDecoration: "none",
  },
  nftname: {
    textDecoration: "none",
  },
}));

function LaunchpadSection2(props) {
  const classes = useStyles();

  const items = [
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      url: "/launchpad-collection",
      collectionname: "Polychain Monsters",
      status: "Ongoing",
      price: "0.2BNB",
      item: "555",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      url: "/launchpad-collection",
      collectionname: "Polychain Monsters",
      status: "Ongoing",
      price: "0.2BNB",
      item: "555",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      url: "/launchpad-collection",
      collectionname: "Polychain Monsters",
      status: "Ongoing",
      price: "0.2BNB",
      item: "555",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      url: "/launchpad-collection",
      collectionname: "Polychain Monsters",
      status: "Ongoing",
      price: "0.2BNB",
      item: "555",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      url: "/launchpad-collection",
      collectionname: "Polychain Monsters",
      status: "Ongoing",
      price: "0.2BNB",
      item: "555",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      url: "/launchpad-collection",
      collectionname: "Polychain Monsters",
      status: "Ongoing",
      price: "0.2BNB",
      item: "555",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      url: "/launchpad-collection",
      collectionname: "Polychain Monsters",
      status: "Ongoing",
      price: "0.2BNB",
      item: "555",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      url: "/launchpad-collection",
      collectionname: "Polychain Monsters",
      status: "Ongoing",
      price: "0.2BNB",
      item: "555",
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
        <LaunchpadSectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
        />
        <Grid container={true} spacing={4}>
        {postlist.length && 
              postlist.sort((a, b) => a.title.localeCompare(b.title)).map((post, i) => {
                if (post.launchpad === "true") {
                return (
            <Grid item={true} xs={12} sm={6} md={3} lg={3} key={index}>
              <Card className={classes.card}>
                <CardActionArea component={Link} to={item.url}>
                  <CardMedia
                    image={item.image}
                    title={item.name}
                    className={classes.media}
                  />
                  <CardContent>
                    <Typography
                      variant="h3"
                      color="textSecondary"
                      className={classes.nftname}
                      gutterBottom={true}
                    >
                      {item.collectionname}
                    </Typography>
                    <Grid container={true} spacing={2} alignItems="center">
                      <Grid item={true} xs={12} sm={6} md={6}>
                        <Typography color="primary" className={classes.price}>
                          {item.price}
                        </Typography>
                      </Grid>
                      <Grid item={true} xs={12} sm={6} md={6}>
                        <Typography
                          color="primary"
                          className={classes.price}
                          align="right"
                        >
                          {item.item} items
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid container={true}>
                      <Typography
                        color="textSecondary"
                        className={classes.nftname}
                      >
                        {item.status} 🔥
                      </Typography>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
                )}
              })
          }
        </Grid>
      </Container>
    </Section>
  );
}

export default LaunchpadSection2;
