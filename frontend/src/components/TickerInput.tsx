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
    <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
      <div className="flex gap-4">
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder="Enter ticker (e.g. AAPL)"
          className="bg-gray-800 text-white px-4 py-2 rounded"
        />
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          defaultValue={"1y"}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          <option value="max">All time</option>
          <option value="5y">5 years</option>
          <option value="1y">1 year</option>
          <option value="6mo">6 months</option>
          <option value="3mo">3 months</option>
          <option value="1mo">1 month</option>
        </select>
      </div>

      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold"
      >
        Search ticker
      </button>
      <PriceChart prices={prices} />
      {metrics && <MetricsCard metrics={metrics} />}
    </div>
  );
}

export default TickerInput;
