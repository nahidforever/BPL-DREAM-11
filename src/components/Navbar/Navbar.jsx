import React from "react";
import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/Currency.png";

const Navbar = ({ coin }) => {
  return (
    <div className="navbar max-w-300 mx-auto mt-4">
      <div className="flex-1">
        <img src={navImg} className="h-14 w-14" alt="" />
      </div>
      <div className="flex-none">
        <button className="flex items-center gap-2 font-bold text-xl">
          {coin} Coin
          <img src={dollarImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
