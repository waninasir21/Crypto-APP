import React from "react";

const Controls = ({ onRefresh, sortOrder, onSortChange, isLoading }) => (
  <div className="controls">
    {/* Refresh Button */}
    <button
      onClick={onRefresh}
      disabled={isLoading}
      className={`px-5 py-2.5 bg-linear-to-br from-cyan-400 to-sky-500 text-black rounded-lg font-semibold transition-all duration-300 
        ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 cursor-pointer"}`}
    >
      {isLoading ? "Refreshing..." : "🔄 Refresh"}
    </button>

    {/* Sort Section */}
    <div className="flex items-center mr-0 gap-2.5">
      <span className="text-slate-300 text-[0.9rem]">
        Sort by 24h Price Change:
      </span>

      {/* Lowest Button */}
      <button
        onClick={() => onSortChange("asc")}
        className={`px-4 py-2 rounded-md font-semibold border transition-all duration-300 cursor-pointer
          ${
            sortOrder === "asc"
              ? "bg-cyan-400 text-black border-cyan-400"
              : "bg-slate-800 text-slate-300 border-slate-700 hover:border-cyan-400"
          }`}
      >
        📈 Lowest
      </button>

      {/* Highest Button */}
      <button
        onClick={() => onSortChange("desc")}
        className={`px-4 py-2 rounded-md font-semibold border transition-all duration-300 cursor-pointer
          ${
            sortOrder === "desc"
              ? "bg-cyan-400 text-black border-cyan-400"
              : "bg-slate-800 text-slate-300 border-slate-700 hover:border-cyan-400"
          }`}
      >
        📊 Highest
      </button>
    </div>
  </div>
);

export default Controls;
