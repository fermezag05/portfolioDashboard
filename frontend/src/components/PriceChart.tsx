//import { RechartsDevtools } from "@recharts/devtools";
import { Legend, Line, LineChart, XAxis, YAxis, Tooltip } from "recharts";

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
