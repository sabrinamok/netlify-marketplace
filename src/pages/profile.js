import React from "react";
import Meta from "./../components/Meta";
import ProfilePage2 from "./../components/ProfilePage2";

function ProfilePage(props) {
  return (
    <>
      <Meta title="Profile" />
      <ProfilePage2
        bgColor="default"
        size="normal"
        bgImage=""
        bgImageOpacity={1}
        image="https://source.unsplash.com/aHrxrT1q2h0/800x600"
      />
    </>
  );
}

export default ProfilePage;
