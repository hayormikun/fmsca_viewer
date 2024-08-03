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
    <section className="w-full">
      <table
        {...getTableProps()}
        className="w-min-full bg-white mx-auto flex flex-col p-4 rounded-2xl overflow-auto lg:overflow-hidden"
      >
        <thead className="w-fit rounded-t-xl flex flex-col gap-2 bg-teal-800">
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="w-full flex items-center px-2 mt-2 gap-2"
            >
              {headerGroup.headers.map((column: any) => (
                // eslint-disable-next-line react/jsx-key
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="flex  items-center justify-center w-[80px] box-border"
                >
                  <h3 className="text-white text-xs capitalize font-medium tracking-wide">
                    {column.render("Header")}
                  </h3>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}

          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="w-full flex items-center px-2 mb-2 gap-2"
            >
              {headerGroup.headers.map((column: any) => (
                // eslint-disable-next-line react/jsx-key
                <th
                  {...column.getHeaderProps()}
                  className=" w-[80px] box-border"
                >
                  {column.canFilter ? column.render("Filter") : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {data !== null && (
          <tbody {...getTableBodyProps()} className="w-fit rounded-b-xl">
            {rows.map((row, index) => {
              prepareRow(row);
              if (index % 2 == 0) {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <tr
                    {...row.getRowProps()}
                    className="w-full bg-teal-500 flex items-center px-2 gap-2"
                  >
                    {row.cells.map((cell) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <td
                          {...cell.getCellProps()}
                          className="text-xs tracking-wide text-center my-2 w-[80px] box-border"
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              } else {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <tr
                    {...row.getRowProps()}
                    className="w-full bg-teal-400 flex items-center px-2 gap-2"
                  >
                    {row.cells.map((cell) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <td
                          {...cell.getCellProps()}
                          className="text-xs tracking-wide text-center my-2 w-[80px] box-border"
                        >
                          {cell.render("Cell")}
                        </td>
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
