"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { fetchData, fetchSearchedData } from "@/utils/utils";
import { PageContext } from "@/contexts/pageContext";
import {
  useFilters,
  useSortBy,
  useTable,
  useGlobalFilter,
  useResizeColumns,
  useBlockLayout,
  useColumnOrder,
  TableOptions,
} from "react-table";
import { COLUMNS } from "./table/columns";
import { GlobalFilter } from "./table/globalFilter";
import { EditableCell } from "./table/editableCell";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SearchBar } from "./table/searchBar";

const defaultColumn: any = {
  Cell: EditableCell,
};

interface ExtendedTableOptions<D extends object> extends TableOptions<D> {
  updateData: (rowIndex: number, columnId: string, value: any) => void;
}

export const UserDetails = () => {
  const [data, setData] = useState<object[]>([{}]);
  const {page} = useContext(PageContext);
  useMemo(() => setData(fetchData(page)), [page]);

  const columns = useMemo(() => COLUMNS, []);
  const [columnOrder, setColumnOrder] = useState<string[]>(
    columns.map((column) => column.accessor as string)
  );

  const updateData = (rowIndex: number, columnId: string, value: any) => {
    setData((oldData: any) =>
      oldData.map((row: any, index: number) =>
        index === rowIndex ? { ...oldData[rowIndex], [columnId]: value } : row
      )
    );
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setColumnOrder: tableSetColumnOrder,
    state,
    setGlobalFilter,
    preGlobalFilteredRows,
  } = useTable(
    {
      columns,
      data,
      defaultColumn: defaultColumn,
      updateData,
    } as ExtendedTableOptions<any>,
    useFilters,
    useColumnOrder,
    useBlockLayout,
    useResizeColumns,
    useGlobalFilter,
    useSortBy
  );

  const handleColumnReorder = () => {
    const newOrder = [...columnOrder];
    const last = newOrder.pop();
    if (last) {
      newOrder.unshift(last);
    }
    setColumnOrder(newOrder);
    tableSetColumnOrder(newOrder);
  };

  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-3 lg:flex-row lg:item-center mb-3 lg:justify-between">
      <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter} />
        {/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setData={setData} page={page} /> */}
        <button
          onClick={handleColumnReorder}
          className="px-3 py-2 rounded-md text-white tracking-wider font-semibold w-fit bg-teal-800"
        >
          Reorder Columns
        </button>
      </div>

      <section className="w-full">
        <table
          {...getTableProps()}
          className="w-min-full bg-white mx-auto flex flex-col p-4 rounded-2xl overflow-auto"
        >
          <thead className="w-fit rounded-t-xl flex flex-col gap-2 bg-teal-800">
            {headerGroups.map((headerGroup) => (
              // eslint-disable-next-line react/jsx-key
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="w-full flex items-center px-2 mt-2 gap-2"
              >
                {headerGroup.headers.map((column: any, index: number) => (
                  // eslint-disable-next-line react/jsx-key
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="relative flex items-center justify-center box-border"
                  >
                    <h3 className="text-white text-xs capitalize font-medium tracking-wide">
                      {column.render("Header")} &#8645;
                    </h3>
                    <div
                      {...column.getResizerProps()}
                      className="resizer"
                      style={{
                        display: "inline-block",
                        width: "10px",
                        height: "100%",
                        position: "absolute",
                        right: "0",
                        top: "0",
                        cursor: "col-resize",
                        transform: "translateX(50%)",
                        zIndex: 20,
                        touchAction: "none",
                      }}
                    />
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
                  <th {...column.getHeaderProps()} className=" box-border">
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
                            className="w-full text-xs capitalize text-left my-1"
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
                            className="w-full text-xs capitalize text-left my-1"
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
    </div>
  );
};
