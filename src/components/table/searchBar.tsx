"use client";
import { fetchSearchedData } from "@/utils/utils";
import { ChangeEvent, MouseEvent, useEffect } from "react";

type Props = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<object[]>>
  page: number
};

export const SearchBar = ({ searchTerm, setSearchTerm, setData, page }: Props) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e: MouseEvent) => {
    setData(fetchSearchedData(searchTerm, page));
    localStorage.setItem("searchTerm", searchTerm);
    return
  };

  return (
    <div className="w-fit flex items-center gap-3">
      <input
        value={searchTerm || ""}
        onChange={handleChange}
        placeholder={`search records...`}
        className="w-64 px-4 rounded-md text-base bg-transparent border-2 h-12"
      />
      <button
          onClick={handleSearch}
          className="px-3 py-2 rounded-md text-white tracking-wider font-semibold w-fit bg-teal-800"
        >
          Search
        </button>
    </div>
  );
};
