import React from "react";
import Meta from "./../components/Meta";
import MarketplaceHero from "./../components/MarketplaceHero";
import LaunchpadSection from "./../components/LaunchpadSection";
import CollectionsSection from "./../components/CollectionsSection";
import DiscoverSection from "./../components/DiscoverSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <MarketplaceHero
        bgColor="default"
        size="medium"
        bgImage="https://source.unsplash.com/HXJkqHexaak/800x600"
        bgImageOpacity={0.3}
        title="Discover, collect, and sell extraordinary NFTs"
        subtitle="A digital marketplace for crypto collectibles and non-fungible tokens (NFTs)."
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonText="Explore"
        buttonColor="primary"
        buttonPath="/collections"
      />
      <LaunchpadSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Launchpad 🚀"
        subtitle=""
      />
      <CollectionsSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Hot Collections 🔥"
        subtitle=""
      />
      <DiscoverSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Discover NFTs"
        subtitle=""
      />
    </>
  );
}

export default IndexPage;
