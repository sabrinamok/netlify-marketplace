import React from "react";
import TableHeaderDesktop from "./TableHeaderDesktop";
import TableDataDesktop from "./TableDataDesktop";
import TableDataMobile from "./TableDataMobile";

function CollectionActivities(props) {
  return (
    <>
      <TableHeaderDesktop
        bgColor="default"
        size=""
        bgImage=""
        bgImageOpacity={1}
      />
      <TableDataDesktop
        bgColor="default"
        size=""
        bgImage=""
        bgImageOpacity={1}
      />
      <TableDataMobile
        bgColor="default"
        size=""
        bgImage=""
        bgImageOpacity={1}
      />
    </>
  );
}

export default CollectionActivities;
