import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from '@material-ui/icons/Telegram'
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import { Link } from "./../util/router";
import { useAuth } from "./../util/auth";
import { useDarkMode } from "./../util/theme";
import {
  useEthers,
} from '@usedapp/core'

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 28,
    marginRight: theme.spacing(2),
  },
  drawerList: {
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },
  menuitem: {
    textTransform: "uppercase",
    fontSize: "1em",
  },
  btnStyle:{
    color: 'rgb(255, 255, 255)',
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    border: 'none',
    padding: '6px 16px',
    borderRadius: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.02857em',
    lineHeight: '1.75',
    fontSize: '0.875rem'
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const auth = useAuth();
  const darkMode = useDarkMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuState, setMenuState] = useState(null);

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  const handleOpenMenu = (event, id) => {
    // Store clicked element (to anchor the menu to)
    // and the menu id so we can tell which menu is open.
    setMenuState({ anchor: event.currentTarget, id });
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  const { activateBrowserWallet, deactivate, account } = useEthers()

  return (
    <Section bgColor={props.color} size="auto">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
            <Link to="/">
              <img src={logo} alt="Logo" className={classes.logo} />
            </Link>
            <Hidden smDown={true} implementation="css">
              <Button component={Link} to="/collections" color="inherit">
                Marketplace
              </Button>
              <Button component={Link} to="/launchpad" color="inherit">
                Launchpad
              </Button>
              <Button component={Link} to="#" color="inherit">
                Verify
              </Button>
            </Hidden>
            <div className={classes.spacer} />
            <Hidden smDown={true} implementation="css">
              <IconButton color="inherit" component="a" style={{ opacity: 0.6 }}>
                <TwitterIcon />
              </IconButton>

              <IconButton color="inherit" component="a" style={{ opacity: 0.6 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
</svg>
              </IconButton>

              <IconButton color="inherit" component="a" style={{ opacity: 0.6 }}>
                <TelegramIcon />
              </IconButton>

              <IconButton color="inherit" component="a" style={{ opacity: 0.6 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16">
  <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
</svg>
              </IconButton>

              {!account && <button className={classes.btnStyle} onClick={() => activateBrowserWallet()}>Connect Wallet</button> }

              {account &&
                <>
                  <Button
                    color="inherit"
                    aria-label="More"
                    aria-controls="more-menu"
                    aria-haspopup="true"
                    onClick={(event) => {
                      handleOpenMenu(event, "more-menu");
                    }}
                  >
                    <Avatar />
                    <ExpandMoreIcon className={classes.buttonIcon} />
                  </Button>
                  <Menu
                    id="more-menu"
                    open={
                      menuState && menuState.id === "more-menu" ? true : false
                    }
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
                      to="/profile/:section"
                      className={classes.menuitem}
                      color="textSecondary"
                    >
                      My Profile
                    </MenuItem>
                  </Menu>
                  <button className={classes.btnStyle} onClick={deactivate}> Disconnect </button>
                </>
              }

              <IconButton
                color="inherit"
                onClick={darkMode.toggle}
                style={{ opacity: 0.6 }}
              >
                {darkMode.value && <NightsStayIcon />}

                {!darkMode.value && <WbSunnyIcon />}
              </IconButton>
            </Hidden>
            <Hidden mdUp={true} implementation="css">
              <IconButton
                onClick={() => {
                  setDrawerOpen(true);
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List
          className={classes.drawerList}
          onClick={() => setDrawerOpen(false)}
        >
          <ListItem component={Link} to="/collections" button={true}>
            <ListItemText>Marketplace</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/launchpad" button={true}>
            <ListItemText>Launchpad</ListItemText>
          </ListItem>
          <ListItem component={Link} to="#" button={true}>
            <ListItemText>Verify</ListItemText>
          </ListItem>

          {!account &&
            <ListItem>
              <button className={classes.btnStyle} onClick={() => activateBrowserWallet()}>Connect Wallet</button>
            </ListItem>
          }

          {account &&
            <>
              <ListItem component={Link} to="/profile" button={true}>
                <ListItemText>My Profile</ListItemText>
              </ListItem>
              <ListItem>
                <button className={classes.btnStyle} onClick={deactivate}> Disconnect </button>
              </ListItem>
            </>
          }

          <ListItem>
            <IconButton
              color="inherit"
              onClick={darkMode.toggle}
              style={{ opacity: 0.6 }}
            >
              {darkMode.value && <NightsStayIcon />}

              {!darkMode.value && <WbSunnyIcon />}
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </Section>
  );
}

export default Navbar;
