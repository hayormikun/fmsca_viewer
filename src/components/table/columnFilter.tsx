import React from "react";

type FilterProps = {
  column: any;
};

export const ColumnFilter = ({ column }: FilterProps) => {
  const { filterValue, setFilter } = column;

  return (
    <span className="flex w-full items-center justify-between gap-2">
      <input
      className="w-full px-2 overflow-x-auto scrollbar-hide rounded-lg border-none active:border-none focus:border-none bg-white h-5 text-xs text-gray-300 outline-none active:bg-white focus-within:bg-white"
        value={filterValue || ""}
        placeholder="filter"
        onChange={(e) => setFilter(e.target.value)}
      />

    </span>
  );
};
