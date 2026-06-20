import { useState } from "react";
import axios from "axios";
import PriceChart from "./PriceChart";
import MetricsCard from "./MetricsCard";

function TickerInput() {
  const [ticker, setTicker] = useState("");
  const [prices, setPrices] = useState([]);
  const [metrics, setMetrics] = useState(null);
  const [period, setPeriod] = useState("1y");

  function handleSearch() {
    axios
      .get(`http://localhost:8000/stock/${ticker}`, {
        params: {
          period: period,
        },
      })
      .then((response) => {
        setPrices(response.data.prices);
        setMetrics(response.data.metrics);
      });
  }

  return (
    <div style={{ width: "800px" }}>
      <input
        type="text"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="Enter ticker (e.g. AAPL)"
      />
      <select
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
        defaultValue={"1y"}
      >
        <option value="max">All time</option>
        <option value="5y">5 years</option>
        <option value="1y">1 year</option>
        <option value="6mo">6 months</option>
        <option value="3mo">3 months</option>
        <option value="1mo">1 month</option>
      </select>
      <button onClick={handleSearch}>Search ticker</button>
      <PriceChart prices={prices} />
      {metrics && <MetricsCard metrics={metrics} />}
    </div>
  );
}

export default TickerInput;
