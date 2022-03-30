import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Section from "./Section";

function AboutStatsSection(props) {
  const items = [
    {
      title: "Traded",
      stat: "69",
    },
    {
      title: "Players",
      stat: "123",
    },
    {
      title: "Listed",
      stat: "137k",
    },
    {
      title: "VOL.(BNB)",
      stat: "30",
    },
    {
      title: "FLOOR(BNB)",
      stat: "0.069",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Grid container={true} justifyContent="center" spacing={2}>
          {items.map((item, index) => (
            <Grid item={true} xs={6} sm={4} md={2} key={index}>
              <Box textAlign="center">
                <Typography variant="overline">{item.title}</Typography>
                <Typography variant="h4">{item.stat}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default AboutStatsSection;
