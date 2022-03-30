import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import { Link } from "./../util/router";

const useStyles = makeStyles((theme) => ({
  dataWrap: {
    margin: "0",
    borderBottom: "1px solid rgba(229, 232, 235,1)",
    padding: ".5rem 0 1rem",
  },
  datatopWrap: {
    margin: "0",
    padding: "1rem 0 .5rem",
  },
  border: {
    borderBottom: "1px solid rgba(229, 232, 235,1)",
  },
  itemimg: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  itemWrap: {
    textDecoration: "none",
  },
  nounderline: {
    textDecoration: "none",
  },
  container: {
    padding: "0",
  },
}));

function OffersTableDataMobile(props) {
  const classes = useStyles();

  const items = [
    {
      floor: "$$$",
      item: "Birb NFT #621 Dracula",
      itemurl: "",
      pricemain: "0.11 BNB",
      pricesub: "$43.35",
      from: "0x4549…Ae2C",
      fromurl: "",
      made: "test",
      status: "paid",
      expiration: "00.00.00",
    },
    {
      floor: "$$$",
      item: "Birb NFT #621 Dracula",
      itemurl: "",
      pricemain: "0.11 BNB",
      pricesub: "$43.35",
      from: "0x4549…Ae2C",
      fromurl: "",
      made: "test",
      status: "paid",
      expiration: "00.00.00",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      display={{
        xs: "block",
        md: "none",
      }}
    >
      <Container className={classes.container}>
        <Grid container={true}>
          {items.map((item, index) => (
            <>
              <Grid
                container={true}
                align="left"
                className={classes.datatopWrap}
              >
                <Grid
                  component={Link}
                  to={item.url}
                  container={true}
                  xs={6}
                  md={4}
                  className={classes.itemWrap}
                >
                  <Box>
                    <Typography
                      variant="overline"
                      color="textPrimary"
                      display="block"
                    >
                      ITEM
                    </Typography>
                    <Typography
                      component={Link}
                      to={item.itemurl}
                      color="textSecondary"
                      className={classes.nounderline}
                    >
                      {item.item}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item={true} xs={6} md={1}>
                  <Box>
                    <Typography variant="overline" color="textPrimary">
                      Price
                    </Typography>
                    <Typography>{item.pricemain}</Typography>
                    <Typography
                      color="textPrimary"
                      className={classes.nounderline}
                    >
                      {item.pricesub}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container={true} align="left">
                <Grid item={true} xs={6} md={1} align="left">
                  <Box>
                    <Typography variant="overline" color="textPrimary">
                      FLOOR DIFFERENCE
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>{item.floor}</Typography>
                  </Box>
                </Grid>
                <Grid item={true} xs={6} md={2} align="left">
                  <Box>
                    <Typography variant="overline" color="textPrimary">
                      From
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      component={Link}
                      to={item.fromurl}
                      color="textSecondary"
                      className={classes.nounderline}
                    >
                      {item.from}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container={true} align="left" className={classes.dataWrap}>
                <Grid item={true} xs={4} md={1} align="left">
                  <Box>
                    <Typography variant="overline" color="textPrimary">
                      Expiration
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      color="textSecondary"
                      className={classes.nounderline}
                    >
                      {item.expiration}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item={true} xs={4} md={1} align="left">
                  <Box>
                    <Typography variant="overline" color="textPrimary">
                      Made
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      color="textSecondary"
                      className={classes.nounderline}
                    >
                      {item.made}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item={true} xs={4} md={1} align="left">
                  <Box>
                    <Typography variant="overline" color="textPrimary">
                      Status
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      color="textSecondary"
                      className={classes.nounderline}
                    >
                      {item.status}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default OffersTableDataMobile;
