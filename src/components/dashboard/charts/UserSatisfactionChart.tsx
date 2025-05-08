
import { BarChart } from "@/components/ui/charts";

interface UserSatisfactionChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
}

const UserSatisfactionChart = ({ data }: UserSatisfactionChartProps) => {
  return (
    <div>
      <h3 className="text-sm font-medium mb-2">User Satisfaction</h3>
      <div className="h-[200px]">
        <BarChart data={data} />
      </div>
    </div>
  );
};

export default UserSatisfactionChart;
