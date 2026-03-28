import React from "react";
import Card from "../UI/Card";

const AvailablePlayers = ({
  playersData,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {playersData.map((player) => (
        <Card
          key={player.playerId}
          player={player}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></Card>
      ))}
    </div>
  );
};

export default AvailablePlayers;
