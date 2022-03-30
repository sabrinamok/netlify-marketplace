import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import { Link } from "./../util/router";

const useStyles = makeStyles((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  container: {
    padding: `0 ${theme.spacing(4)}px`,
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
  socialWrap: {
    maxWidth: "300px",
    margin: "0 auto",
  },
  imageWrapper: {
    height: "370px",
    objectFit: "cover",
    width: "100%",
    borderRadius: "15px",
  },
  width: {
    maxWidth: "1000px",
    width: "100%",
    margin: "0 auto",
  },
  btn: {
    margin: "1rem 0",
  },
}));

function LaunchpadPage(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Polychain Monsters",
      description:
        "Polychain Monsters are beautifully animated digital collectibles with varying scarcities. Each Polychain Monster is backed by a truly unique NFT and can be unpacked with $PMON tokens.",
      collection: "Polychain Monsters",
      start: "10h 33m 09s",
      end: "1 Apr 2022",
      price: "0.01 AETH",
      amount: "6500",
      url: "/",
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
        <Grid
          item={true}
          align="center"
          container={true}
          direction="column"
          spacing={2}
        >
          {items.map((item, index) => (
            <>
              <Grid item={true} key={index}>
                <Typography variant="h2" className={classes.itemName}>
                  {item.title}
                </Typography>
              </Grid>
              <Grid
                container={true}
                item={true}
                spacing={2}
                className={classes.socialWrap}
              >
                <Grid item={true} xs={3}>
                  <img
                    src="https://uploads.divjoy.com/icon-twitter.svg"
                    alt="Facebook"
                  />
                </Grid>
                <Grid item={true} xs={2}>
                  <img
                    src="https://uploads.divjoy.com/icon-twitter.svg"
                    alt="Facebook"
                  />
                </Grid>
                <Grid item={true} xs={2}>
                  <img
                    src="https://uploads.divjoy.com/icon-twitter.svg"
                    alt="Facebook"
                  />
                </Grid>
                <Grid item={true} xs={2}>
                  <img
                    src="https://uploads.divjoy.com/icon-twitter.svg"
                    alt="Facebook"
                  />
                </Grid>
                <Grid item={true} xs={2}>
                  <img
                    src="https://uploads.divjoy.com/icon-twitter.svg"
                    alt="Facebook"
                  />
                </Grid>
              </Grid>
              <Grid item={true} key={index} className={classes.width}>
                <Typography color="textPrimary" paragraph={true}>
                  {item.description}
                </Typography>
              </Grid>
              <Grid
                container={true}
                spacing={2}
                className={classes.width}
                item={true}
              >
                <Grid item={true} xs={6} md={3}>
                  <Typography variant="overline" color="textPrimary">
                    Mint start
                  </Typography>
                  <Typography variant="h5">{item.start}</Typography>
                </Grid>
                <Grid item={true} xs={6} md={3}>
                  <Typography variant="overline" color="textPrimary">
                    Mint end
                  </Typography>
                  <Typography variant="h5">{item.end}</Typography>
                </Grid>
                <Grid item={true} xs={6} md={3}>
                  <Typography variant="overline" color="textPrimary">
                    Start price
                  </Typography>
                  <Typography variant="h5">{item.price}</Typography>
                </Grid>
                <Grid item={true} xs={6} md={3}>
                  <Typography variant="overline" color="textPrimary">
                    Amount
                  </Typography>
                  <Typography variant="h5">{item.amount}</Typography>
                </Grid>
                <Grid item={true} key={index} xs={12} className={classes.btn}>
                  <Button
                    component={Link}
                    to={item.url}
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Open mint page
                  </Button>
                </Grid>
                <Grid item={true} xs={12} className={classes.width}>
                  <img
                    src={props.image}
                    alt=""
                    className={classes.imageWrapper}
                  />
                </Grid>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default LaunchpadPage;
