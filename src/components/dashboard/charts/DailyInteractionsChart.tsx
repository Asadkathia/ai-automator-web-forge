
import { LineChart } from "@/components/ui/charts";

interface DailyInteractionsChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      fill: boolean;
      borderColor: string;
      backgroundColor: string;
      tension: number;
    }[];
  };
}

const DailyInteractionsChart = ({ data }: DailyInteractionsChartProps) => {
  return (
    <div>
      <h3 className="text-sm font-medium mb-2">Daily Interactions</h3>
      <div className="h-[200px]">
        <LineChart data={data} />
      </div>
    </div>
  );
};

export default DailyInteractionsChart;
