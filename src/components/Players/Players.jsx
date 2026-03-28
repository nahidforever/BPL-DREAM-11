import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Players = ({ playerPromise, coin, setCoin }) => {
  const playersData = use(playerPromise);

  const [selectedType, setSelectedType] = useState("available");

  return (
    <div className="max-w-300 mx-auto">
      <div className="flex justify-between items-center mb-5 mt-2">
        {selectedType === "available" ? (
          <h2 className="font-bold text-xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-xl">Selected Players 2/6</h2>
        )}
        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#e7fe29]" : ""} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#e7fe29]" : ""} rounded-l-none rounded-r-xl`}
          >
            Selected (0)
          </button>
        </div>
      </div>
      <AvailablePlayers
        playersData={playersData}
        coin={coin}
        setCoin={setCoin}
      ></AvailablePlayers>
    </div>
  );
};

export default Players;
