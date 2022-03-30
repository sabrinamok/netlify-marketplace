import React from "react";
import OffersRecTableHeaderDesktop from "./OffersRecTableHeaderDesktop";
import OffersRecTableDataDesktop from "./OffersRecTableDataDesktop";
import OffersRecTableDataMobile from "./OffersRecTableDataMobile";

function OffersReceived(props) {
  return (
    <>
      <OffersRecTableHeaderDesktop
        bgColor="default"
        size=""
        bgImage=""
        bgImageOpacity={1}
      />
      <OffersRecTableDataDesktop
        bgColor="default"
        size=""
        bgImage=""
        bgImageOpacity={1}
      />
      <OffersRecTableDataMobile
        bgColor="default"
        size=""
        bgImage=""
        bgImageOpacity={1}
      />
    </>
  );
}

export default OffersReceived;
