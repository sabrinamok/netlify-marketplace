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

function TableDataMobile2(props) {
  const classes = useStyles();

  const items = [
    {
      img: "https://source.unsplash.com/random/1200x600",
      type: "Sale",
      item: "Birb NFT #621 Dracula",
      itemurl: "",
      pricemain: "0.11 BNB",
      pricesub: "$43.35",
      from: "0x4549…Ae2C",
      fromurl: "",
      to: "0x4549…Ae2C",
      tourl: "",
      date: "3 days ago",
      transacurl: "",
    },
    {
      img: "https://source.unsplash.com/random/1200x600",
      type: "Sale",
      item: "Birb NFT #621 Dracula",
      itemurl: "",
      pricemain: "0.11 BNB",
      pricesub: "$43.35",
      from: "0x4549…Ae2C",
      fromurl: "",
      to: "0x4549…Ae2C",
      tourl: "",
      date: "3 days ago",
      transacurl: "",
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
                  align="left"
                  alignItems="center"
                  className={classes.itemWrap}
                >
                  <Grid item={true} xs={12}>
                    <Box className={classes.itemimgWrap}>
                      <img
                        src={item.img}
                        href={item.url}
                        className={classes.itemimg}
                      />
                    </Box>
                  </Grid>
                  <Grid item={true} xs={12}>
                    <Box>
                      <Typography color="textSecondary">{item.item}</Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item={true} xs={6} md={1} align="right">
                  <Box>
                    <Typography className={classes.nounderline}>
                      {item.type}
                    </Typography>
                    <Typography>{item.pricemain}</Typography>
                    <Typography
                      component={Link}
                      to={item.transacurl}
                      color="textSecondary"
                      className={classes.nounderline}
                    >
                      {item.date}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container={true} align="left" className={classes.dataWrap}>
                <Grid item={true} xs={4} md={1} align="left">
                  <Box>
                    <Typography variant="overline" color="textPrimary">
                      USD Price
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>{item.pricesub}</Typography>
                  </Box>
                </Grid>
                <Grid item={true} xs={4} md={2} align="left">
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
                <Grid item={true} xs={4} md={2} align="right">
                  <Box>
                    <Typography variant="overline" color="textPrimary">
                      To
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      component={Link}
                      to={item.tourl}
                      color="textSecondary"
                      className={classes.nounderline}
                    >
                      {item.to}
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

export default TableDataMobile2;
