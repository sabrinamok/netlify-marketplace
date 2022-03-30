import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import { Link } from "./../util/router";
import Creations from "./Creations";
import Collections from "./Collections";
import Activities from "./Activities";
import OffersMade from "./OffersMade";
import OffersReceived from "./OffersReceived";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
  },
  menuitem: {
    textTransform: "uppercase",
    fontSize: "1em",
  },
}));

function ProfileTabs(props) {
  const classes = useStyles();

  const validSections = {
    creations: true,
    collections: true,
    activities: true,
    "offers-made": true,
    "offers-received": true,
  };

  const section = validSections[props.section] ? props.section : "creations";

  const data = {
    domain: "company.com",
    companyName: "Company",
  };
  const [menuState, setMenuState] = useState(null);
  const handleOpenMenu = (event, id) => {
    // Store clicked element (to anchor the menu to)
    // and the menu id so we can tell which menu is open.
    setMenuState({ anchor: event.currentTarget, id });
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className={classes.container}
    >
      <Tabs
        value={section}
        indicatorColor="primary"
        textColor="primary"
        centered={true}
      >
        <Tab
          component={Link}
          to="/profile/creations"
          label="Creations"
          value="creations"
        />
        <Tab
          component={Link}
          to="/profile/collections"
          label="Collections"
          value="collections"
        />
        <Tab
          label="offers"
          aria-label="More"
          aria-controls="more-menu"
          aria-haspopup="true"
          onClick={(event) => {
            handleOpenMenu(event, "more-menu");
          }}
        />
        <Menu
          id="more-menu"
          open={menuState && menuState.id === "more-menu" ? true : false}
          anchorEl={menuState && menuState.anchor}
          getContentAnchorEl={undefined}
          onClick={handleCloseMenu}
          onClose={handleCloseMenu}
          keepMounted={true}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem
            component={Link}
            to="/profile/offers-made"
            className={classes.menuitem}
            value="offers-made"
          >
            OFFERS MADE
          </MenuItem>
          <MenuItem
            component={Link}
            to="/profile/offers-received"
            className={classes.menuitem}
            value="offers-received"
          >
            OFFERS RECEIVED
          </MenuItem>
        </Menu>
        <Tab
          component={Link}
          to="/profile/activities"
          label="Activities"
          value="activities"
        />
      </Tabs>
      <Box mt={5}>
        <Container>
          {section === "creations" && <Creations {...data} />}

          {section === "collections" && (
            <Collections
              bgColor="default"
              size=""
              bgImage=""
              bgImageOpacity={1}
              title="Explore Collections"
              subtitle=""
            />
          )}

          {section === "activities" && <Activities {...data} />}

          {section === "offers-made" && <OffersMade {...data} />}

          {section === "offers-received" && <OffersReceived {...data} />}
        </Container>
      </Box>
    </Section>
  );
}

export default ProfileTabs;
