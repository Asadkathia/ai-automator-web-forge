
import React, { useState } from "react";
import SidebarNav from "./SidebarNav";
import TopBar from "./TopBar";
import { useSidebar } from "@/components/ui/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [notificationCount] = useState(2);
  const { state } = useSidebar();

  return (
    <div className="flex min-h-screen w-full bg-ai-light">
      <SidebarNav />
      
      <div className={`flex-1 flex flex-col transition-all duration-200 ${state === 'collapsed' ? 'md:ml-0' : 'md:ml-0'}`}>
        <TopBar notificationCount={notificationCount} />
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
