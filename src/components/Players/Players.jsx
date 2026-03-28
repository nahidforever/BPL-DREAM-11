import React, { use } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Players = ({ playerPromise }) => {
  const playersData = use(playerPromise);

  return (
    <div className="max-w-300 mx-auto">
      <AvailablePlayers playersData={playersData}></AvailablePlayers>
    </div>
  );
};

export default Players;
