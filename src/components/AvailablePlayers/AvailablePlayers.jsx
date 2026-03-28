import React from "react";
import Card from "../UI/Card";

const AvailablePlayers = ({ playersData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {playersData.map((player) => (
        <Card key={player.playerId} player={player}></Card>
      ))}
    </div>
  );
};

export default AvailablePlayers;
