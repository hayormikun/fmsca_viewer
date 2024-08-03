import React from "react";

type FilterProps = {
  column: any;
};

export const ColumnFilter = ({ column }: FilterProps) => {
  const { filterValue, setFilter } = column;

  return (
    <input
      className="w-full px-2 overflow-x-auto scrollbar-hide rounded-md border-none cursor-pointer active:border-none focus:border-none bg-white h-5 text-xs text-gray-600 outline-none active:bg-white focus-within:bg-white"
      value={filterValue || ""}
      placeholder="filter"
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};
