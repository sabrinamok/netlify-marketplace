import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";

const useStyles = makeStyles((theme) => ({}));

function TableHeaderDesktop(props) {
  const classes = useStyles();

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
      <Container>
        <Grid item={true}>
          <Grid container={true} spacing={4} align="left">
            <Grid item={true} xs={1}>
              <Box>
                <Typography variant="overline" color="textPrimary">
                  Type
                </Typography>
              </Box>
            </Grid>
            <Grid item={true} xs={4}>
              <Box>
                <Typography variant="overline" color="textPrimary">
                  Item
                </Typography>
              </Box>
            </Grid>
            <Grid item={true} xs={2} align="right">
              <Box>
                <Typography variant="overline" color="textPrimary">
                  Price
                </Typography>
              </Box>
            </Grid>
            <Grid item={true} xs={2}>
              <Box>
                <Typography variant="overline" color="textPrimary">
                  To
                </Typography>
              </Box>
            </Grid>
            <Grid item={true} xs={2}>
              <Box>
                <Typography variant="overline" color="textPrimary">
                  From
                </Typography>
              </Box>
            </Grid>
            <Grid item={true} xs={1}>
              <Box>
                <Typography variant="overline" color="textPrimary">
                  Date
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default TableHeaderDesktop;
