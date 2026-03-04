import React from "react";

const Header = () => (
  <div className="header">
    <h1 className="text-[2.5rem] font-bold mb-2.5 bg-linear-to-br from-cyan-400 to-sky-500 bg-clip-text text-transparent">
      <span className="text-white bg-clip-border inline-block">💰</span> Crypto
      Markets
    </h1>
    <p className="text-slate-300 text-base">
      Top 20 Cryptocurrencies - Click on coins to see more details
    </p>
  </div>
);

export default Header;
