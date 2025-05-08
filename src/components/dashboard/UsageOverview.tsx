
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle } from "lucide-react";

interface UsageOverviewProps {
  userData: {
    name: string;
    plan: string;
    lastUpdated: string;
    company?: string;
  };
}

const UsageOverview = ({ userData }: UsageOverviewProps) => {
  // Mock data for plan features and usage
  const planFeatures = [
    "24/7 Customer Support",
    "Multi-channel Integration",
    "Advanced Analytics",
    "Custom Training",
    "Team Collaboration",
  ];
  
  const usageStats = [
    {
      name: "Monthly Messages",
      used: 8500,
      total: 10000,
      percentage: 85,
    },
    {
      name: "Active Bots",
      used: 2,
      total: 5,
      percentage: 40,
    },
    {
      name: "Storage",
      used: 4.2,
      total: 10,
      percentage: 42,
      unit: "GB",
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Plan & Usage</CardTitle>
        <Button variant="outline" size="sm">
          Upgrade Plan
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">{userData.plan}</h3>
            <Button variant="link" className="p-0 h-auto text-ai-blue">
              View Details
            </Button>
          </div>
          <div className="space-y-2">
            {planFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium">Usage Overview</h3>
          
          {usageStats.map((stat) => (
            <div key={stat.name}>
              <div className="flex justify-between text-sm mb-2">
                <span>{stat.name}</span>
                <span>
                  {stat.used}
                  {stat.unit ? stat.unit : ""} / {stat.total}
                  {stat.unit ? stat.unit : ""}
                </span>
              </div>
              <Progress value={stat.percentage} className="h-2" />
            </div>
          ))}
        </div>
        
        <div className="pt-4 border-t">
          <p className="text-sm text-gray-500">
            Your plan renews on <span className="font-medium">June 8, 2025</span>
          </p>
          <div className="flex gap-2 mt-4">
            <Button variant="outline" size="sm">
              Manage Plan
            </Button>
            <Button size="sm" className="bg-ai-blue hover:bg-ai-blue/90">
              Upgrade
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsageOverview;
