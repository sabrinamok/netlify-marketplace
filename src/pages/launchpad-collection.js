import React from "react";
import Meta from "./../components/Meta";
import LaunchpadPage from "./../components/LaunchpadPage";

function LaunchpadCollectionPage(props) {
  return (
    <>
      <Meta title="Launchpad Collection" />
      <LaunchpadPage
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        image="https://source.unsplash.com/aHrxrT1q2h0/800x600"
      />
    </>
  );
}

export default LaunchpadCollectionPage;
