import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import { Link } from "./../util/router";
import Properties from "./Properties";
import ItemActivities from "./ItemActivities";

const useStyles = makeStyles((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  container: {
    maxWidth: "95%",
  },
  imageWrapper: {
    margin: "0 auto",
    width: "100%",
    borderRadius: "20px",
    "& > img": {},
  },
  row: {
    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(2)}px`,
    },
  },
  itemName: {
    fontSize: "2.5rem",
  },
  collection: {
    textDecoration: "none",
    marginBottom: ".5rem",
    display: "block",
  },
  collector: {
    textDecoration: "none",
    marginBottom: ".5rem",
    marginLeft: "5px",
    display: "block",
  },
  usd: {
    marginLeft: "5px",
  },
}));

function ItemPage(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Unifairy",
      description:
        "The Unifairy are the most magical and fairest of Polkamon. Their wings stretch into the realms beyond this world, enchanting those around her by her unique disposition.",
      collection: "Polychain Monsters",
      collectionurl: "",
      collector: "Pmon_Collector",
      collectorurl: "",
      price: "0.059",
      usd: "$253.67",
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
          <Grid container={true} item={true} direction="column" xs={12} md={6}>
            <img src={props.image} alt="" className={classes.imageWrapper} />
          </Grid>
          <Grid item={true} xs={12} md={6}>
            {items.map((item, index) => (
              <Grid container={true} direction="column" rowSpacing="2">
                <Grid item={true} key={index}>
                  <Typography
                    component={Link}
                    to={item.collectionurl}
                    className={classes.collection}
                    color="textSecondary"
                  >
                    {item.collection}
                  </Typography>
                </Grid>
                <Grid item={true} key={index}>
                  <Typography
                    gutterBottom={true}
                    variant="h2"
                    className={classes.itemName}
                  >
                    {item.title}
                  </Typography>
                </Grid>
                <Grid item={true} container={true} key={index}>
                  <Grid>
                    <Typography color="textPrimary">Preserved by</Typography>
                  </Grid>
                  <Grid>
                    <Typography
                      component={Link}
                      to={item.collectorurl}
                      className={classes.collector}
                      color="primary"
                    >
                      {item.collector}
                    </Typography>
                  </Grid>
                  <Grid item={true} key={index} xs={12}>
                    <Typography color="textPrimary" paragraph={true}>
                      {item.description}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item={true} key={index} xs={12}>
                  <Grid>
                    <Typography variant="overline" color="textPrimary">
                      Price
                    </Typography>
                  </Grid>
                  <Grid container={true} alignItems="center">
                    <Grid>
                      <Typography variant="h5" paragraph={true}>
                        {item.price}
                      </Typography>
                    </Grid>
                    <Grid item={true}>
                      <Typography
                        color="textPrimary"
                        className={classes.usd}
                        paragraph={true}
                      >
                        ({item.usd})
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item={true} key={index} xs={12}>
                  <Grid container={true} alignItems="center">
                    <Grid>
                      <Button variant="contained" color="primary" size="large">
                        Buy Now
                      </Button>
                    </Grid>
                    <Grid item={true}>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        className={classes.usd}
                      >
                        Place a Bid
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item={true} key={index} xs={12}>
                  <Properties
                    bgColor="default"
                    size=""
                    bgImage=""
                    bgImageOpacity={1}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12}>
            <Typography variant="h5">Activities</Typography>
          </Grid>
          <ItemActivities />
        </Grid>
      </Container>
    </Section>
  );
}

export default ItemPage;
