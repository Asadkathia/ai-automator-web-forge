
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DailyInteractionsChart from "./charts/DailyInteractionsChart";
import UserSatisfactionChart from "./charts/UserSatisfactionChart";
import MetricsSummary from "./metrics/MetricsSummary";
import { interactionsData, satisfactionData } from "./charts/mockChartData";

const AnalyticsPanel = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Chatbot Insights</CardTitle>
        <Button variant="outline" size="sm">
          View Full Analytics
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <DailyInteractionsChart data={interactionsData} />
        <UserSatisfactionChart data={satisfactionData} />
        <MetricsSummary
          responseTime="1.8s"
          resolutionRate="87%"
          totalConversations="2,483"
        />
      </CardContent>
    </Card>
  );
};

export default AnalyticsPanel;
