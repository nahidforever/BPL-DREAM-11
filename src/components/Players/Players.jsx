import React, { use } from "react";

const Players = ({ playerPromise }) => {
  const playersData = use(playerPromise);
  console.log(playersData);
  return (
    <div>
      <h2>Players: {playersData.length}</h2>
    </div>
  );
};

export default Players;
