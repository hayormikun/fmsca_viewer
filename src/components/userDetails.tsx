"use client";
import React, { useContext, useMemo, useState } from "react";
import { fetchData } from "@/utils/utils";
import { PageContext } from "@/contexts/pageContext";
import { useFilters, useSortBy, useTable } from "react-table";
import { COLUMNS } from "./table/columns";

export const UserDetails = () => {
  const [data, setData] = useState<any>([]);
  const { page } = useContext(PageContext);
  useMemo(() => setData(fetchData(page)), [page]);

  const columns = useMemo(() => COLUMNS, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useFilters,
      useSortBy
    );

  return (
    <section className="w-min-full">
      <table
        {...getTableProps()}
        className="w-full bg-white mx-auto flex flex-col p-4 rounded-2xl lg:overflow-hidden"
      >
        <thead className="w-full rounded-t-xl bg-teal-800 lg:overflow-hidden">
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="w-full flex items-center gap-2"
            >
              {headerGroup.headers.map((column: any) => (
                // eslint-disable-next-line react/jsx-key
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="flex flex-col gap-2 text-center h-auto m-2 justify-center w-1/12 box-border"
                >
                  <div className="flex items-center w-fit mx-auto">
                    <h3 className="text-white text-xs capitalize font-medium tracking-wide">{column.render("Header")}</h3>
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </div>

                  <div className="block">
                    {column.canFilter ? column.render("Filter") : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {data !== null && (
          <tbody {...getTableBodyProps()} className="w-full rounded-b-xl lg:overflow-hidden">
            {rows.map((row, index) => {
              prepareRow(row);
              if (index % 2 == 0) {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <tr {...row.getRowProps()} className="w-full bg-teal-500 flex items-center gap-2">
                    {row.cells.map((cell) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <td {...cell.getCellProps()} className="text-xs tracking-wide text-center m-2 w-1/12 box-border">{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              } else {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <tr {...row.getRowProps()} className="w-full bg-teal-400 flex items-center gap-2">
                    {row.cells.map((cell) => {
                      
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <td {...cell.getCellProps()} className="text-xs tracking-wide text-center m-2 w-1/12 box-border">{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              }
            })}
          </tbody>
        )}
      </table>
    </section>
  );
};
