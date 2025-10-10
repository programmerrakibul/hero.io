import { Star } from "lucide-react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RatingChart = ({ ratings }) => {
  const CustomTooltip = ({ payload, active }) => {
    if (active) {
      const {
        payload: { name, count },
      } = payload[0];

      return (
        <div className="backdrop-blur-2xl bg-gradient-to-tl from-[#642ee3a5] to-[#9e62f251] p-3 rounded-lg w-48 sm:w-auto">
          <p className="flex items-center justify-center gap-1.5">
            <span>
              {count} users rated this app {name}
            </span>
            <Star
              className="inline-block animate-pulse"
              size={16}
              fill="#FF8811"
              color="#FF8811"
            />
          </p>
        </div>
      );
    }
  };

  return (
    <div className="h-64 sm:h-80 capitalize text-sm sm:text-base">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          margin={16}
          reverseStackOrder={true}
          layout="vertical"
          data={ratings}
        >
          <CartesianGrid stroke="transparent" />
          <Tooltip content={<CustomTooltip />} />
          <XAxis type="number" axisLine={false} tickLine={false} />
          <YAxis
            dataKey="name"
            type="category"
            reversed
            axisLine={false}
            tickLine={false}
          />
          <Bar fill="#FF8811" dataKey="count" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
