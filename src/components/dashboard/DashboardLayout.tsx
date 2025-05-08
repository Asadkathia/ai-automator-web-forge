
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Bot, 
  Database, 
  BarChart, 
  Calendar, 
  Settings,
  MessageSquare,
  Bell,
  User,
  LogOut,
  PlusCircle
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const [notificationCount] = useState(2);

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    navigate("/");
  };

  const handleCreateNewBot = () => {
    toast({
      title: "Create new bot",
      description: "This feature is coming soon!",
    });
  };

  return (
    <div className="flex min-h-screen w-full bg-ai-light">
      <Sidebar>
        <SidebarHeader className="py-4 px-2">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-2xl font-bold gradient-text">NeuraFlow</h2>
            <SidebarTrigger />
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
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      
      <div className="flex-1 flex flex-col">
        {/* Header/Top Bar */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden mr-2"
              onClick={() => document.querySelector('[data-sidebar="trigger"]')?.click()}
            >
              <SidebarTrigger />
            </Button>
            
            <Button 
              onClick={handleCreateNewBot}
              className="bg-ai-blue hover:bg-ai-blue/90 hidden sm:flex"
            >
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Bot
            </Button>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {notificationCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notificationCount}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex flex-col items-start">
                  <span className="font-medium">Your chatbot is live!</span>
                  <span className="text-sm text-muted-foreground">Your customer service bot is now active.</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start">
                  <span className="font-medium">Plan Update Available</span>
                  <span className="text-sm text-muted-foreground">Check out new features in your plan.</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* User Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span className="hidden md:inline-block">David Chen</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" /> Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Calendar className="mr-2 h-4 w-4" /> Billing
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" /> Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
