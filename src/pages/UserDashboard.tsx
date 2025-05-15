
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import ServicesPanel from "@/components/dashboard/ServicesPanel";
import AnalyticsPanel from "@/components/dashboard/AnalyticsPanel";
import UsageOverview from "@/components/dashboard/UsageOverview";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock user data - in a real app, this would come from authentication
  const userData = {
    name: "David Chen",
    plan: "Enterprise Custom Plan",
    lastUpdated: "May 6, 2025",
    company: "Eastwood Technologies"
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <DashboardLayout>
        <div className="p-6 space-y-6">
          <WelcomeBanner userData={userData} />
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full md:w-auto grid-cols-3 h-auto p-1">
              <TabsTrigger value="overview" className="px-4 py-2">Overview</TabsTrigger>
              <TabsTrigger value="activity" className="px-4 py-2">Activity</TabsTrigger>
              <TabsTrigger value="usage" className="px-4 py-2">Usage</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <ServicesPanel />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AnalyticsPanel />
                <UsageOverview userData={userData} />
              </div>
            </TabsContent>
            
            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity Log</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Detailed activity information for your chatbots will appear here.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="usage" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Usage & Plan Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive usage statistics and plan details will appear here.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DashboardLayout>
    </SidebarProvider>
  );
};

export default UserDashboard;
