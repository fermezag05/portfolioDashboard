//import { RechartsDevtools } from "@recharts/devtools";
import { Legend, Line, LineChart, XAxis, YAxis, Tooltip } from "recharts";

// #region Sample data
const data = [
  {
    name: "Page A",
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 300,
    pv: 4567,
    amt: 2400,
  },
  {
    name: "Page C",
    uv: 320,
    pv: 1398,
    amt: 2400,
  },
  {
    name: "Page D",
    uv: 200,
    pv: 9800,
    amt: 2400,
  },
  {
    name: "Page E",
    uv: 278,
    pv: 3908,
    amt: 2400,
  },
  {
    name: "Page F",
    uv: 189,
    pv: 4800,
    amt: 2400,
  },
];

interface Props {
  prices: { date: string; price: number }[];
}

// #endregion
export default function PriceChart({ prices }: Props) {
  return (
    <LineChart
      style={{ width: "100%", aspectRatio: 1.618, maxWidth: 800 }}
      responsive
      data={prices}
    >
      <XAxis dataKey="date" tick={{ fontSize: 10 }} />
      <YAxis
        dataKey="price"
        label={{ value: "price", position: "insideLeft", angle: -90 }}
        tick={{ fontSize: 10 }}
      />
      <Line dataKey="price" />
      <Tooltip />
    </LineChart>
  );
}
