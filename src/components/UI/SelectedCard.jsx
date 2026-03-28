import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedCard = ({ player, handleDeleteSelectedPlayers }) => {
  return (
    <div>
      <div className="mt-5">
        <div className="flex justify-between items-center gap-5 p-8 rounded-xl border">
          <div className="flex items-center gap-2">
            <img src={player.image} className="w-auto h-20 rounded" alt="" />
            <div>
              <h2 className=" flex items-center gap-2 font-bold text-xl">
                <FaUser></FaUser>
                {player.name}
              </h2>
              <p>{player.role}</p>
            </div>
          </div>

          <button
            onClick={() => handleDeleteSelectedPlayers(player)}
            className="btn text-red-500"
          >
            <MdDelete></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
