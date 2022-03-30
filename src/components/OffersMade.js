import React from "react";
import OffersTableHeaderDesktop from "./OffersTableHeaderDesktop";
import OffersTableDataDesktop from "./OffersTableDataDesktop";
import OffersTableDataMobile from "./OffersTableDataMobile";

function OffersMade(props) {
  return (
    <>
      <OffersTableHeaderDesktop
        bgColor="default"
        size=""
        bgImage=""
        bgImageOpacity={1}
      />
      <OffersTableDataDesktop
        bgColor="default"
        size=""
        bgImage=""
        bgImageOpacity={1}
      />
      <OffersTableDataMobile
        bgColor="default"
        size=""
        bgImage=""
        bgImageOpacity={1}
      />
    </>
  );
}

export default OffersMade;
