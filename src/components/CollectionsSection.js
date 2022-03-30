import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import HomeCollectionsHeader from "./HomeCollectionsHeader";
import { Link } from "./../util/router";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "95%",
  },
  name: {
    textDecoration: "none",
    display: "block",
  },
  price: {
    textDecoration: "none",
    fontWeight: "400",
  },
  avatargrid: {
    width: "100%",
  },
  avatarname: {
    width: "100%",
  },
  grid: {
    textDecoration: "none",
  },
  card: {
    padding: "1rem",
    boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
  },
}));

function CollectionsSection(props) {
  const classes = useStyles();

  const items = [
    {
      image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
      title: "Polychain Monsters",
      url: "/collection/:section",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/BkmdKnuAZtw/800x600",
      title: "Polychain Monsters",
      url: "/collection/:section",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      title: "Polychain Monsters",
      url: "/collection/:section",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
      title: "Polychain Monsters",
      url: "/collection/:section",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
      title: "Polychain Monsters",
      url: "/collection/:section",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/BkmdKnuAZtw/800x600",
      title: "Polychain Monsters",
      url: "/collection/:section",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      title: "Polychain Monsters",
      url: "/collection/:section",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
      title: "Polychain Monsters",
      url: "/collection/:section",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
      title: "Polychain Monsters",
      url: "/collection/:section",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
      title: "Polychain Monsters",
      url: "/collection/:section",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
      title: "Polychain Monsters",
      url: "/collection/:section",
      nftname: "Unidonkey",
      price: "0.000735 BNB",
      time: "6 hours ago",
    },
    {
      image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
      title: "Polychain Monsters",
      url: "/collection/:section",
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
        <HomeCollectionsHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
        />
        <Grid container={true} spacing={3}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} sm={6} md={3} lg={3} key={index}>
              <Card className={classes.card}>
                <Grid
                  component={Link}
                  to={item.url}
                  container={true}
                  className={classes.grid}
                >
                  <Grid item={true} xs={3}>
                    <Avatar src={item.image} />
                  </Grid>
                  <Grid item={true} xs={9}>
                    <Typography
                      variant="h3"
                      color="textSecondary"
                      gutterBottom={true}
                      className={classes.name}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h3"
                      color="textPrimary"
                      gutterBottom={true}
                      className={classes.price}
                    >
                      {item.price}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default CollectionsSection;
