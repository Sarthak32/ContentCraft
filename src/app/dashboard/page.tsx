"use client";

import { useState } from "react";
import { SearchDashboard } from "../../components/search-dashboard";
import { TemplateList } from "../../components/template-list";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string>();

  return (
    <div>
      <SearchDashboard onSearchInput={setSearchInput} />
      <TemplateList searchInput={searchInput as string} />
    </div>
  );
};

export default Dashboard;
