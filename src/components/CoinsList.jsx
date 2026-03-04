import React from "react";
import CoinListItem from "./CoinListItem";

const CoinsList = ({ coins, loading, error }) => {
  if (error) {
    return (
      <div className="bg-red-100 border border-red-500 rounded-lg p-5 text-red-500 text-center">
        <strong>Error:</strong> {error}
      </div>
    );
  }

  if (loading && coins.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-100">
        <div className="w-12.5 h-12.5 border-4 border-solid border-[#06b6d41a] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      {coins.map((coin) => (
        <CoinListItem key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default CoinsList;
