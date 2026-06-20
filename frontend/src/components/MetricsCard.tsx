interface MetricsProps {
  metrics: { total_return: number; volatility: number; sharpe: number };
}

export default function MetricsCard({ metrics }: MetricsProps) {
  return (
    <div>
      <p> Total return: {metrics.total_return}%</p>
      <p> Volatility: {metrics.volatility}%</p>
      <p> Sharpe: {metrics.sharpe}</p>
    </div>
  );
}
