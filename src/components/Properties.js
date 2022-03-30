import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Section2 from "./Section2";

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
  card: {
    boxShadow: "none",
    padding: "10px",
    /*backgroundColor:'#F5F5F9',*/
    border: "solid 1px rgba(0, 0, 0, .15)",
  },
}));

function Properties(props) {
  const classes = useStyles();

  const items = [
    {
      main: "Body",
      sub: "Tiger",
      percent: "14%",
    },
    {
      main: "Ears",
      sub: "Gorilla",
      percent: "9%",
    },
    {
      main: "Eyes",
      sub: "Silver",
      percent: "6%",
    },
    {
      main: "Hat",
      sub: "Crown",
      percent: "6%",
    },
    {
      main: "Body",
      sub: "Tiger",
      percent: "14%",
    },
    {
      main: "Ears",
      sub: "Gorilla",
      percent: "9%",
    },
  ];

  return (
    <Section2
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Grid>
          <Typography variant="overline" color="textPrimary">
            Properties
          </Typography>
        </Grid>
        <Grid container={true} spacing={2}>
          {items.map((item, index) => (
            <Grid item={true} xs={6} sm={4} key={index}>
              <Card className={classes.card} align="center">
                <Typography variant="overline" color="primary">
                  {item.main}
                </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom={true}
                  variant="h3"
                >
                  {item.sub}
                </Typography>
                <Typography>{item.percent} have this trait</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section2>
  );
}

export default Properties;
