import React from "react";

import { HomeBackground, AccessButton, LogInIcon } from "./Homedesign";

function HomePage() {
  return (
    <>
      <HomeBackground>
        <AccessButton to="/login">
          <LogInIcon></LogInIcon>
        </AccessButton>
      </HomeBackground>
    </>
  );
}

export default HomePage;
