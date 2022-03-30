import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import ProfileTabs from "./ProfileTabs";
import { useRouter } from "./../util/router";
import {
  useEthers,
} from '@usedapp/core'


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
    height: "370px",
    borderRadius: "20px",
    [theme.breakpoints.up("xs")]: {
      height: "270px",
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

function ProfilePage2(props) {
  const classes = useStyles();

  const router = useRouter();

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

  const { activateBrowserWallet, deactivate, account } = useEthers()
  
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
              <Grid item={true} key={index}>
              {account && 
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  variant="outlined"
                >
                  {account}
                </Button>
              }
              </Grid>
            </>
          ))}

          <Grid item={true} xs={12} md={6} />
        </Grid>
        <Grid container={true} spacing={4}>
          <ProfileTabs
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
  );
}

export default ProfilePage2;
