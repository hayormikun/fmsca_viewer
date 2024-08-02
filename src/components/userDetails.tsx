"use client";
import React, { useContext, useMemo, useState } from "react";
import { Heading } from "./table/heading";
import { RowData } from "./table/rowData";
import { fetchData } from "@/utils/utils";
import { PageContext } from "@/contexts/pageContext";
import { useFilters, useSortBy, useTable } from "react-table";
import { COLUMNS } from "./table/columns";
import { ColumnFilter } from "./table/columnFilter";

export const UserDetails = () => {
  const [data, setData] = useState<any>([]);
  const { page } = useContext(PageContext);
  useMemo(() => setData(fetchData(page)), [page]);

  const columns = useMemo(() => COLUMNS, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    },
    useFilters,
    useSortBy,
  );

  return (
    <section className="w-full">
      <table {...getTableProps()} className="w-[90%] mx-auto flex flex-col">
        <thead className="w-full">
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="w-full flex gap-2"
            >
              {headerGroup.headers.map((column: any) => (
                // eslint-disable-next-line react/jsx-key
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="flex text-center text-sm capitalize font-semibold tracking-wide w-full"
                >
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {data !== null && (
          <tbody {...getTableBodyProps()} className="w-full">
             {rows.map(row => {
            prepareRow(row)
            return (
              // eslint-disable-next-line react/jsx-key
              <tr {...row.getRowProps()} className="w-full flex gap-2">
                {row.cells.map(cell => {
                  // eslint-disable-next-line react/jsx-key
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
          </tbody>
        )}
      </table>
    </section>
  );
};
