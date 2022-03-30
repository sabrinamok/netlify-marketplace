import React from "react";
import Grid from "@material-ui/core/Grid";
import TableHeaderDesktop from "./TableHeaderDesktop";
import TableDataDesktop from "./TableDataDesktop";
import TableDataMobile from "./TableDataMobile";

function ItemActivities(props) {
  return (
    <Grid item={true}>
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
    </Grid>
  );
}

export default ItemActivities;
