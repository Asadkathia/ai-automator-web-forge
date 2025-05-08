
interface MetricsSummaryProps {
  responseTime: string;
  resolutionRate: string;
  totalConversations: string;
}

const MetricsSummary = ({
  responseTime,
  resolutionRate,
  totalConversations,
}: MetricsSummaryProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <p className="text-sm text-gray-500">Avg. Response Time</p>
        <p className="text-xl font-bold text-ai-dark">{responseTime}</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <p className="text-sm text-gray-500">Resolution Rate</p>
        <p className="text-xl font-bold text-ai-dark">{resolutionRate}</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <p className="text-sm text-gray-500">Total Conversations</p>
        <p className="text-xl font-bold text-ai-dark">{totalConversations}</p>
      </div>
    </div>
  );
};

export default MetricsSummary;
