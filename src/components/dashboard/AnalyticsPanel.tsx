
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, BarChart } from "@/components/ui/charts";

const AnalyticsPanel = () => {
  // Mock data for the charts
  const interactionsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Interactions",
        data: [65, 78, 52, 91, 83, 56, 89],
        fill: false,
        borderColor: "#38BDF8",
        backgroundColor: "rgba(56, 189, 248, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const satisfactionData = {
    labels: ["Very Good", "Good", "Neutral", "Poor", "Very Poor"],
    datasets: [
      {
        label: "User Satisfaction",
        data: [45, 32, 15, 5, 3],
        backgroundColor: [
          "rgba(56, 189, 248, 0.8)",  // ai-blue
          "rgba(56, 189, 248, 0.6)",
          "rgba(56, 189, 248, 0.4)",
          "rgba(56, 189, 248, 0.3)",
          "rgba(56, 189, 248, 0.2)",
        ],
      },
    ],
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Chatbot Insights</CardTitle>
        <Button variant="outline" size="sm">
          View Full Analytics
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-2">Daily Interactions</h3>
          <div className="h-[200px]">
            <LineChart 
              data={interactionsData}
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-2">User Satisfaction</h3>
          <div className="h-[200px]">
            <BarChart 
              data={satisfactionData}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">Avg. Response Time</p>
            <p className="text-xl font-bold text-ai-dark">1.8s</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">Resolution Rate</p>
            <p className="text-xl font-bold text-ai-dark">87%</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">Total Conversations</p>
            <p className="text-xl font-bold text-ai-dark">2,483</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsPanel;
