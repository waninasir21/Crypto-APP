export const formatPrice = (price) => {
  if (price === null || price === undefined) return "N/A";
  if (price < 1) {
    return `$${price.toFixed(6)}`;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(price);
};

export const formatMarketCap = (marketCap) => {
  if (!marketCap) return "N/A";
  if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`;
  if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
  if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
  return `$${marketCap.toFixed(0)}`;
};

export const getPriceChangeColor = (change) => {
  if (change === null || change === undefined) return "#cbd5e1";
  return change >= 0 ? "#10b981" : "#ef4444";
};

export const getPriceChangeIcon = (change) => {
  if (change === null || change === undefined) return "→";
  return change >= 0 ? "↑" : "↓";
};
