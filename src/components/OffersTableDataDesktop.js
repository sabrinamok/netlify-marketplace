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
  dataTable: {
    marginTop: "1rem",
  },
}));

function OffersTableDataDesktop(props) {
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
        xs: "none",
        md: "block",
      }}
    >
      <Container className={classes.dataTable}>
        <Grid item={true} container={true} spacing={4}>
          {items.map((item, index) => (
            <Grid
              container={true}
              alignItems="center"
              align="left"
              className={classes.dataWrap}
              spacing={4}
            >
              <Grid
                component={Link}
                to={item.url}
                container={true}
                md={3}
                className={classes.itemWrap}
              >
                <Box>
                  <Typography color="textSecondary">{item.item}</Typography>
                </Box>
              </Grid>
              <Grid item={true} xs={6} md={2} className={classes.dataInnerWrap}>
                <Box>
                  <Typography>{item.pricemain}</Typography>
                  <Typography color="textPrimary">{item.pricesub}</Typography>
                </Box>
              </Grid>
              <Grid
                item={true}
                md={2}
                align="left"
                className={classes.dataInnerWrap}
              >
                <Box>
                  <Typography className={classes.nounderline}>
                    {item.floor}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item={true}
                xs={4}
                md={2}
                align="left"
                className={classes.dataInnerWrap}
              >
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
              <Grid
                item={true}
                xs={4}
                md={1}
                align="left"
                className={classes.dataInnerWrap}
              >
                <Box>
                  <Typography
                    component={Link}
                    to={item.fromurl}
                    color="textSecondary"
                    className={classes.nounderline}
                  >
                    {item.expiration}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item={true}
                xs={4}
                md={1}
                align="left"
                className={classes.dataInnerWrap}
              >
                <Box>
                  <Typography
                    component={Link}
                    to={item.transacurl}
                    color="textSecondary"
                    className={classes.nounderline}
                  >
                    {item.made}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item={true}
                xs={4}
                md={1}
                align="left"
                className={classes.dataInnerWrap}
              >
                <Box>
                  <Typography
                    component={Link}
                    to={item.transacurl}
                    color="textSecondary"
                    className={classes.nounderline}
                  >
                    {item.status}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default OffersTableDataDesktop;
