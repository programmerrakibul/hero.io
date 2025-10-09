import { Star } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
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
        <div className="backdrop-blur-2xl p-3 rounded-lg w-48 sm:w-auto">
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
    <div className="h-64 sm:h-80 my-10 capitalize text-sm sm:text-base">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          margin={16}
          reverseStackOrder={true}
          layout="vertical"
          data={ratings}
        >
          <CartesianGrid stroke="transparent" />
          <Tooltip content={<CustomTooltip />} />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" reversed />
          <Bar fill="#FF8811" dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
