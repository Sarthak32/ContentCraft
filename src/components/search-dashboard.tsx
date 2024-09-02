import { Auth } from "@/components/auth";
import { SearchIcon } from "lucide-react";
import React from "react";
import { Categories } from "./categories";

const categories = [
  { name: "All", value: "All" },
  { name: "Youtube", value: "Youtube" },
  { name: "Instagram", value: "Instagram" },
  { name: "Tiktok", value: "Tiktok" },
  { name: "Linkedin", value: "Linkedin" },
  { name: "Tweet", value: "Tweet" },
];

export const SearchDashboard = ({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <div className="mx-4 md:mx-6 lg:mx-8 py-4 md:py-6 lg:py-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
        <div className="flex items-center border rounded-full bg-gray-100 px-4 py-2 w-full md:w-1/4 lg:w-1/4 hover:bg-gray-200">
          <SearchIcon className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-black w-full"
            aria-label="Search"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
        <Categories items={categories}/>
        <div className="ml-auto mt-4 md:mt-0">
          <Auth />
        </div>
      </div>
    </div>
  );
};
