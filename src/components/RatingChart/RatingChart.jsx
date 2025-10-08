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
  return (
    <div className="h-80 my-10 capitalize">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          margin={16}
          reverseStackOrder={true}
          layout="vertical"
          data={ratings}
        >
          <CartesianGrid stroke="transparent" />
          <Tooltip />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" reversed />
          <Bar fill="#FF8811" dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
