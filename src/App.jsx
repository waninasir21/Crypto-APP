import React from "react";
import "./App.css";
import Header from "./components/Header";
import Controls from "./components/Controls";
import CoinsList from "./components/CoinsList";
import useCoinData from "./hooks/useCoinData";

function App() {
  const { coins, loading, error, fetchCoins, sortOrder, changeSortOrder } =
    useCoinData();

  return (
    <div className="container">
      <Header />
      <Controls
        onRefresh={fetchCoins}
        sortOrder={sortOrder}
        onSortChange={changeSortOrder}
        isLoading={loading}
      />
      <CoinsList coins={coins} loading={loading} error={error} />
    </div>
  );
}
export default App;
