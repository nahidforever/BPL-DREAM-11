import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Card = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = () => {
    let newCoin = coin - player.biddingPrice;
    if (newCoin >= 0) {
      setCoin(coin - player.biddingPrice);
    } else {
      toast.error("Not Enough Coin to Purchase this player");
      return;
    }
    setIsSelected(true);
    toast.success(`${player.name} is Selected`);
    setSelectedPlayers([...selectedPlayers, player]);
  };
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={player.image} alt={player.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser></FaUser> {player.name}
        </h2>

        <div className=" flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <FaFlag></FaFlag>
            <p>{player.country}</p>
          </div>
          <button className="btn">{player.role}</button>
        </div>

        <div className="divider"></div>
        <h2 className="font-bold">Rating</h2>
        <div className="flex justify-center items-center font-bold">
          <p>{player.battingType}</p>
          <p className="text-right">{player.bowlingType}</p>
        </div>

        <div className="card-actions justify-between items-center">
          <p className="font-semibold">Price: {player.biddingPrice}</p>
          <button
            className="btn"
            onClick={handleChoosePlayer}
            disabled={isSelected ? true : false}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
