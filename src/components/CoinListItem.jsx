import React, { useState } from "react";
import {
  formatPrice,
  formatMarketCap,
  getPriceChangeColor,
  getPriceChangeIcon,
} from "../utilities/formatter";

const CoinListItem = ({ coin }) => {
  const [expanded, setExpanded] = useState(false);

  const priceChange = coin.price_change_percentage_24h || 0;
  const changeColor = getPriceChangeColor(priceChange);
  const changeIcon = getPriceChangeIcon(priceChange);

  return (
    <div className="bg-slate-800 border border-cyan-500/20 rounded-[10px] mb-3 overflow-hidden transition-all duration-300">
      {/* Main Row */}
      <div
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center p-4 cursor-pointer transition-colors duration-300 ${
          expanded ? "bg-cyan-500/5" : "bg-transparent"
        }`}
      >
        {/* Icon */}
        <img
          src={coin.image}
          alt={coin.name}
          className="w-10 h-10 rounded-full mr-3 object-cover"
          onError={(e) => {
            e.target.src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23334155" width="100" height="100"/%3E%3Ctext x="50" y="50" font-size="40" fill="%2306b6d4" text-anchor="middle" dy=".3em"%3E%3F%3C/text%3E%3C/svg%3E';
          }}
        />

        {/* Coin Info */}
        <div className="flex-1 min-w-34">
          <h3 className="m-0 mb-1 text-[1.1rem] font-semibold text-white">
            {coin.name}
          </h3>
          <p className="m-0 text-[0.85rem] text-slate-300 uppercase">
            {coin.symbol}
          </p>
        </div>

        {/* Price */}
        <div className="min-w-30 text-right mr-5">
          <div className="text-[1.1rem] font-semibold mb-1 text-white">
            {formatPrice(coin.current_price)}
          </div>
        </div>

        {/* Price Change */}
        <div
          className="min-w-25 text-right mr-5 font-semibold text-[1rem]"
          style={{ color: changeColor }}
        >
          {changeIcon} {priceChange.toFixed(2)}%
        </div>

        {/* Expand Toggle */}
        <div
          className={`w-7.5 h-7.5 flex items-center justify-center bg-cyan-500/10 rounded-full transition-transform duration-300 text-cyan-400 text-[1.2rem] ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </div>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="bg-cyan-500/5 border-t border-cyan-500/20 p-4 animate-FadeIn">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
            {[
              {
                label: "Market Cap Rank",
                value: coin.market_cap_rank,
              },
              { label: "Market Cap", value: formatMarketCap(coin.market_cap) },
              {
                label: "24h Volume",
                value: formatMarketCap(coin.total_volume),
              },
              { label: "All Time High", value: formatPrice(coin.ath) },
              { label: "All Time Low", value: formatPrice(coin.atl) },
              {
                label: "Circulating Supply",
                value: formatMarketCap(coin.circulating_supply),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-cyan-500/10 p-3 rounded-md border-l-[3px] border-cyan-400"
              >
                <div className="text-[0.75rem] text-slate-300 mb-1 uppercase">
                  {item.label}
                </div>
                <div className="text-[1rem] font-semibold text-white">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinListItem;
