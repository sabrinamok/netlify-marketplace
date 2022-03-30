import React, { useState, useCallback } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import CollectionItems from "./CollectionItems";
import CollectionActivities from "./CollectionActivities";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    paddingLeft:'0',
    paddingRight:'0',
  },
}));

function CollectionPageTabs(props) {
  const classes = useStyles();

  const validSections = {
    items: true,
    activities: true,
  };

  const section = validSections[props.section] ? props.section : "items";

  const data = {
    domain: "company.com",
    companyName: "Company",
  };

  const [value, setValue] = useState(0);

  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  }, [])

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className={classes.container}
    >
      <Tabs
        value={value} onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered={true}
      >
        <Tab
          label="Items"
        />
        <Tab
          label="Activities"
        />
      </Tabs>
      <Box mt={5}>
        <Container>
          {value === 0 && <CollectionItems {...data} />}

          {value === 1 && <CollectionActivities {...data} />}
        </Container>
      </Box>
    </Section>
  );
}

export default CollectionPageTabs;
