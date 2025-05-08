
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface WelcomeBannerProps {
  userData: {
    name: string;
    plan: string;
    lastUpdated: string;
    company?: string;
  };
}

const WelcomeBanner = ({ userData }: WelcomeBannerProps) => {
  return (
    <Card className="bg-gradient-to-r from-ai-blue/90 to-ai-dark border-none text-white">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Welcome back, {userData.name}!
            </h1>
            <p className="text-white/90 max-w-md">
              Here's what's happening in your automation suite.
            </p>
          </div>
          
          <Card className="bg-white/10 border-white/20 text-white p-4 rounded-lg w-full md:w-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span className="font-medium">Plan:</span> 
                <span>{userData.plan}</span>
              </div>
              <div className="md:border-l md:pl-4 border-white/20">
                <span className="font-medium">Last Updated:</span> 
                <span>{userData.lastUpdated}</span>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="flex mt-4 gap-2">
          <Button 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/20 hover:text-white"
          >
            Edit Plan
          </Button>
          <Button 
            variant="outline"
            className="border-white/30 text-white hover:bg-white/20 hover:text-white"
          >
            View Onboarding Guide
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeBanner;
