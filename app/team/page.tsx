import React from "react";
import Header from "../components/team/header";
import TeamSection from "../components/team/teamCards";
import TeamCircle from "../components/team/teamcircle";
import JoinUs from "../components/team/JoinUs";

function Team() {
  return (
    <>
      <Header />
      <TeamSection />
      <TeamCircle />
      <JoinUs />
    </>
  );
}

export default Team;
