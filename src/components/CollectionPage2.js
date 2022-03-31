import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import CollectionStatsSection from "./CollectionStatsSection";
import CollectionPageTabs from "./CollectionPageTabs";
import { useRouter } from "./../util/router";

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
    height: 370,
    [theme.breakpoints.up("xs")]: {
      height: 270,
    },
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
}));

function CollectionPage2(props) {
  const classes = useStyles();

  const router = useRouter();

  const items = [
    {
      title: "Polychain Monsters",
      description:
        "Polychain Monsters are beautifully animated digital collectibles with varying scarcities. Each Polychain Monster is backed by a truly unique NFT and can be unpacked with $PMON tokens.",
      collection: "Polychain Monsters",
    },
  ];


  return (
    <>
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
              <CollectionStatsSection
                bgColor="default"
                size=""
                bgImage=""
                bgImageOpacity={1}
              />
              <Grid item={true} key={index} className={classes.width}>
                <Typography color="textPrimary" paragraph={true}>
                  {item.description}
                </Typography>
              </Grid>
              <Grid item={true} xs={12} className={classes.width}>
                <img
                  src={props.image}
                  alt=""
                  className={classes.imageWrapper}
                />
              </Grid>
            </>
          ))}
        </Grid>
        <Grid container={true}>
          <CollectionPageTabs
            bgColor="default"
            size="normal"
            bgImage=""
            bgImageOpacity={1}
            section={router.query.section}
            key={router.query.section}
          />
        </Grid>
      </Container>
    </Section>
    </>
  );
}

export default CollectionPage2;
