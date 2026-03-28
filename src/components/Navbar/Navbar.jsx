import React from "react";
import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/Currency.png";

const Navbar = () => {
  return (
    <div className="navbar max-w-300 mx-auto">
      <div className="flex-1">
        <img src={navImg} className="h-[55px] w-[55px]" alt="" />
      </div>
      <div className="flex-none">
        <button className="flex items-center gap-2 font-bold text-xl">
          O Coin
          <img src={dollarImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
