import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import CollectionSectionHeader from "./CollectionSectionHeader";
import { Link } from "./../util/router";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "95%",
  },
  media: {
    [theme.breakpoints.up("xs")]: {
      height: 170,
    },
    [theme.breakpoints.up("sm")]: {
      height: 170,
    },
    [theme.breakpoints.up("md")]: {
      height: 220,
    },
    [theme.breakpoints.between("md", "lg")]: {
      height: 170,
    },
    [theme.breakpoints.up("lg")]: {
      height: 300,
    },
  },
  card: {
    borderRadius: 15,
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  name: {
    textDecoration: "none",
    display: "block",
    fontWeight: "400",
    lineHeight: "1.45em",
  },
  nftname: {
    textDecoration: "none",
    display: "block",
  },
}));

function CollectionPage3(props) {
  const classes = useStyles();

  const items = [
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      user: "PM_Collectors",
      userurl: "/post/ballons",
      url: "/collection/:section",
      collectionname: "Polychain Monsters",
      desc: "Polychain Monsters are beautifully animated digital collectibles with varying scarcities. Each Polymon is backed by a truly unique NFT and can be unpacked with $PMON tokens.",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      user: "PM_Collectors",
      userurl: "/post/ballons",
      url: "/collection/:section",
      collectionname: "Polychain Monsters",
      desc: "Polychain Monsters are beautifully animated digital collectibles with varying scarcities. Each Polymon is backed by a truly unique NFT and can be unpacked with $PMON tokens.",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      user: "PM_Collectors",
      userurl: "/post/ballons",
      url: "/collection/:section",
      collectionname: "Polychain Monsters",
      desc: "Polychain Monsters are beautifully animated digital collectibles with varying scarcities. Each Polymon is backed by a truly unique NFT and can be unpacked with $PMON tokens.",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      user: "PM_Collectors",
      userurl: "/post/ballons",
      url: "/collection/:section",
      collectionname: "Polychain Monsters",
      desc: "Polychain Monsters are beautifully animated digital collectibles with varying scarcities. Each Polymon is backed by a truly unique NFT and can be unpacked with $PMON tokens.",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      user: "Polychain Monsters",
      userurl: "/post/ballons",
      url: "/collection/:section",
      collectionname: "Unidonkey",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      user: "PM_Collectors",
      userurl: "/post/ballons",
      url: "/collection/:section",
      collectionname: "Polychain Monsters",
      desc: "Polychain Monsters are beautifully animated digital collectibles with varying scarcities. Each Polymon is backed by a truly unique NFT and can be unpacked with $PMON tokens.",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      user: "PM_Collectors",
      userurl: "/post/ballons",
      url: "/collection/:section",
      collectionname: "Polychain Monsters",
      desc: "Polychain Monsters are beautifully animated digital collectibles with varying scarcities. Each Polymon is backed by a truly unique NFT and can be unpacked with $PMON tokens.",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      user: "PM_Collectors",
      userurl: "/post/ballons",
      url: "/collection/:section",
      collectionname: "Polychain Monsters",
      desc: "Polychain Monsters are beautifully animated digital collectibles with varying scarcities. Each Polymon is backed by a truly unique NFT and can be unpacked with $PMON tokens.",
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
        <CollectionSectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
        />
        <Grid container={true} spacing={4}>
          {items.map((item, index) => (
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
                      component={Link}
                      to={item.userurl}
                      variant="h3"
                      color="textPrimary"
                      gutterBottom={true}
                      className={classes.name}
                      align="center"
                    >
                      {item.user}
                    </Typography>
                    <Typography
                      component={Link}
                      to={item.url}
                      variant="h3"
                      color="textSecondary"
                      className={classes.nftname}
                      align="center"
                      gutterBottom={true}
                    >
                      {item.collectionname}
                    </Typography>
                    <Typography
                      variant="h3"
                      color="textPrimary"
                      gutterBottom={true}
                      className={classes.name}
                      align="center"
                    >
                      {item.desc}
                    </Typography>
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

export default CollectionPage3;
