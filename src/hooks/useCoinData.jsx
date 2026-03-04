import { useState, useEffect } from "react";

const useCoinData = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

  const fetchCoins = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cryptocurrency data");
      }

      const data = await response.json();
      const sortedData = sortCoins(data, sortOrder);
      setCoins(sortedData);
    } catch (err) {
      setError(err.message || "An error occurred while fetching data");
      console.error("Error fetching coins:", err);
    } finally {
      setLoading(false);
    }
  };

  const sortCoins = (data, order) => {
    return [...data].sort((a, b) => {
      const changeA = a.price_change_percentage_24h || 0;
      const changeB = b.price_change_percentage_24h || 0;
      return order === "asc" ? changeA - changeB : changeB - changeA;
    });
  };

  const changeSortOrder = (order) => {
    setSortOrder(order);
    const sorted = sortCoins(coins, order);
    setCoins(sorted);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return { coins, loading, error, fetchCoins, sortOrder, changeSortOrder };
};
export default useCoinData;
