import React from "react";
import Meta from "./../components/Meta";
import ItemPage from "./../components/ItemPage";

function ItemsPage(props) {
  return (
    <>
      <Meta title="Items" />
      <ItemPage
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        image="https://source.unsplash.com/aHrxrT1q2h0/800x600"
      />
    </>
  );
}

export default ItemsPage;
