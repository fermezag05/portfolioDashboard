//import { RechartsDevtools } from "@recharts/devtools";
import {
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

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
      <CartesianGrid stroke="#aaa" strokeDasharray="2 2" />
      <XAxis
        dataKey="date"
        tick={{ fontSize: 9 }} /*label={{ value: "date" }}*/
      />
      <YAxis
        dataKey="price"
        label={{ value: "price (USD)", position: "insideLeft", angle: -90 }}
        tick={{ fontSize: 12 }}
        domain={["auto", "auto"]}
      />
      <Line
        type="monotone"
        dataKey="price"
        stroke="green"
        dot={{
          fill: "var(--color-surface-base)",
        }}
        activeDot={{
          stroke: "dark green",
        }}
        strokeWidth={2}
      />
      <Tooltip
        labelFormatter={(label) => `Date: ${label}`}
        contentStyle={{ backgroundColor: "#1a1a1a", color: "white" }}
        labelStyle={{ color: "white" }}
      />
    </LineChart>
  );
}
