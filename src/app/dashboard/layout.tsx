import React from "react";
import { AIUsage } from "@/components/ai-usage";
import { Sidebar } from "@/components/sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-gray-50 h-screen flex">
      <div className="md:w-64 hidden md:flex flex-col fixed h-screen ">
        <Sidebar />
        <div className="mt-4">
          <AIUsage />
        </div>
      </div>
      <div className="md:ml-64 bg-gray-50 h-full  pb-5 flex-grow">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
