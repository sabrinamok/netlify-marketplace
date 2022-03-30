import React from "react";
import Navbar from "./../components/Navbar";
import AboutPage from "./about";
import FaqPage from "./faq";
import ContactPage from "./contact";
import LegalPage from "./legal";
import IndexPage from "./index";
import CollectionPage from "./collection";
import ItemsPage from "./items";
import ProfilePage from "./profile";
import CollectionsPage from "./collections";
import LaunchpadCollectionPage from "./launchpad-collection";
import LaunchpadPage2 from "./launchpad";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import Footer from "./../components/Footer";
import { ThemeProvider } from "./../util/theme";

function App(props) {
  return (
    <ThemeProvider>
      <Router>
        <>
          <Navbar
            color="default"
            logo="https://uploads.divjoy.com/logo.svg"
            logoInverted="https://uploads.divjoy.com/logo-white.svg"
          />

          <Switch>
            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/legal/:section" component={LegalPage} />

            <Route exact path="/" component={IndexPage} />

            <Route
              exact
              path="/collection/:section"
              component={CollectionPage}
            />

            <Route exact path="/items" component={ItemsPage} />

            <Route exact path="/profile/:section" component={ProfilePage} />

            <Route exact path="/collections" component={CollectionsPage} />

            <Route
              exact
              path="/launchpad-collection"
              component={LaunchpadCollectionPage}
            />

            <Route exact path="/launchpad" component={LaunchpadPage2} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bgColor="default"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            description="A digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items."
            copyright={`© ${new Date().getFullYear()} Company`}
            logo="https://uploads.divjoy.com/logo.svg"
            logoInverted="https://uploads.divjoy.com/logo-white.svg"
            sticky={true}
          />
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
