interface MetricsProps {
  metrics: { total_return: number; volatility: number; sharpe: number };
}

export default function MetricsCard({ metrics }: MetricsProps) {
  return (
    <div className="flex gap-4 mt-4">
      <div className="bg-gray-700 rounded-xl p-4 text-center">
        <p className="text-gray-400 text-sm">Total Return</p>
        <p
          className={
            metrics.total_return >= 0
              ? "text-green-400 text-2xl font-bold"
              : "text-red-400 text-2xl font-bold"
          }
        >
          {metrics.total_return}%
        </p>
      </div>
      <div className="bg-gray-700 rounded-xl p-4 text-center">
        <p className="text-gray-400 text-sm">Volatility</p>
        <p className="text-white text-2xl font-bold"> {metrics.volatility}%</p>
      </div>
      <div className="bg-gray-700 rounded-xl p-4 text-center">
        <p className="text-gray-400 text-sm">Sharpe</p>
        <p className="text-white text-2xl font-bold"> {metrics.sharpe}</p>
      </div>
    </div>
  );
}
