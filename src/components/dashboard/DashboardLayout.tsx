
import React, { useState } from "react";
import SidebarNav from "./SidebarNav";
import TopBar from "./TopBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [notificationCount] = useState(2);

  return (
    <div className="flex min-h-screen w-full bg-ai-light">
      <SidebarNav />
      
      <div className="flex-1 flex flex-col">
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
