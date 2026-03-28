import React from "react";
import SelectedCard from "../UI/SelectedCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handleDeleteSelectedPlayers = (player) => {
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.name !== player.name,
    );
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.biddingPrice);
  };

  return (
    <div>
      {selectedPlayers.length === 0 ? (
        <div>
          {" "}
          <div className="h-[400px] flex items-center justify-center flex-col">
            <h2 className="font-bold text-xl">No Player Selected Yet</h2>
            <p>Go to Available tab to select players</p>
          </div>
        </div>
      ) : (
        selectedPlayers.map((player) => (
          <SelectedCard
            player={player}
            handleDeleteSelectedPlayers={handleDeleteSelectedPlayers}
          ></SelectedCard>
        ))
      )}
    </div>
  );
};

export default SelectedPlayers;
