import React from "react";

type Props = {
  preGlobalFilteredRows: any;
  globalFilter: string | undefined;
  setGlobalFilter: (filterValue: string | undefined) => void;
};

export const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: Props) => {
  const count = preGlobalFilteredRows.length;

  return (
    <span>
      Search:{" "}
      <input
        value={globalFilter || ""}
        onChange={(e) => {
          setGlobalFilter(e.target.value || undefined);
        }}
        placeholder={`search records...`}
        className="w-64 px-4 rounded-md text-base bg-transparent border-2 h-12"
      />
    </span>
  );
};
