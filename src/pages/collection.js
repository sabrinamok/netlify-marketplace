import React from "react";
import Meta from "./../components/Meta";
import CollectionPage2 from "./../components/CollectionPage2";
import { useRouter } from "./../util/router";

function CollectionPage(props) {
  const router = useRouter();

  return (
    <>
      <Meta title="Collection" />
      <CollectionPage2
        bgColor="default"
        size="normal"
        bgImage=""
        bgImageOpacity={1}
        image="https://source.unsplash.com/aHrxrT1q2h0/800x600"
      />
    </>
  );
}

export default CollectionPage;
