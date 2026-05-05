import { useState } from "react";
import axios from "axios";

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
    <div>
      <input
        type="text"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="Enter ticker (e.g. AAPL)"
      />
      <button onClick={handleSearch}>Search ticker</button>
    </div>
  );
}

export default TickerInput;
