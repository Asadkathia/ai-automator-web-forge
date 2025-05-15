
import React from "react";
import { 
  LayoutDashboard, 
  Bot, 
  Database, 
  BarChart, 
  Calendar, 
  Settings,
  MessageSquare,
  LogOut
} from "lucide-react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const SidebarNav = () => {
  const navigate = useNavigate();
  const { state, toggleSidebar } = useSidebar();

  const handleLogout = () => {
    // In a real implementation, we would call supabase.auth.signOut() here
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    navigate("/");
  };

  return (
    <Sidebar>
      <SidebarHeader className="py-4 px-2">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-2xl font-bold gradient-text">NeuraFlow</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:block" 
            onClick={toggleSidebar}
          >
            <SidebarTrigger />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Dashboard" isActive={true}>
              <LayoutDashboard />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Bots & Services">
              <Bot />
              <span>Bots & Services</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Integrations">
              <Database />
              <span>Integrations</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Analytics">
              <BarChart />
              <span>Analytics</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Plan & Billing">
              <Calendar />
              <span>Plan & Billing</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Settings">
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Support">
              <MessageSquare />
              <span>Chat with Us</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Logout" onClick={handleLogout}>
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarNav;
