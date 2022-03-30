import React from "react";
import Meta from "./../components/Meta";
import CollectionPage3 from "./../components/CollectionPage3";

function CollectionsPage(props) {
  return (
    <>
      <Meta title="Collections" />
      <CollectionPage3
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Explore Collections 🔥"
        subtitle=""
      />
    </>
  );
}

export default CollectionsPage;
