import { useState } from "react";
import axios from "axios";
import PriceChart from "./PriceChart";

function TickerInput() {
  const [ticker, setTicker] = useState("");
  const [prices, setPrices] = useState([]);

  function handleSearch() {
    axios
      .get(`http://localhost:8000/stock/${ticker}`, {
        params: {
          period: "1y",
        },
      })
      .then((response) => {
        setPrices(response.data);
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
      <button onClick={handleSearch}>Search ticker</button>
      <PriceChart prices={prices} />
    </div>
  );
}

export default TickerInput;
