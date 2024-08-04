"use client";
import { PageContext } from "@/contexts/pageContext";
import { getTotalPages, paginationRange } from "@/utils/utils";
import React, { useContext } from "react";

type Props = {};

export const PaginationList = (props: Props) => {
  const { page, setPage } = useContext(PageContext);
  const totalPages = getTotalPages();
  const paginationArray = paginationRange(totalPages, page, 1);

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  const handleStartPage = () => {
    setPage(1);
  };

  const handleSelectedPage = (selected: number | string) => {
    if (selected === "... ") {
      setPage(1);
      return;
    }

    if (selected === " ...") {
      setPage(totalPages);
      return;
    }

    if (typeof selected === "number") {
      setPage(selected);
      return;
    }
  };

  const handleLastPage = () => {
    setPage(totalPages);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section className="w-full md:w-[40%] flex justify-end">
      <ul className="w-full flex items-center gap-2">
        {page === 1 ? (
          ""
        ) : (
          <li>
            <button
              type="button"
              className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium text-teal-400 bg-white rounded-sm md:rounded-md hover:bg-teal-400 hover:text-white cursor-pointer"
              onClick={handleStartPage}
            >
              &laquo;
            </button>
          </li>
        )}
        {page === 1 ? (
          ""
        ) : (
          <li>
            <button
              type="button"
              className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium text-teal-400 bg-white rounded-sm md:rounded-md hover:bg-teal-400 hover:text-white cursor-pointer"
              onClick={handlePrev}
            >
              &lsaquo;
            </button>
          </li>
        )}
        {paginationArray.map((item) => {
          if (item === page) {
            return (
              <li key={item}>
                <button
                  type="button"
                  className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium bg-teal-400 rounded-sm md:rounded-md text-white cursor-pointer"
                  onClick={() => handleSelectedPage(item)}
                >
                  {item}
                </button>
              </li>
            );
          } else {
            return (
              <li key={item}>
                <button
                  type="button"
                  className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium text-teal-400 bg-white rounded-sm md:rounded-md hover:bg-teal-400 hover:text-white cursor-pointer"
                  onClick={() => handleSelectedPage(item)}
                >
                  {item}
                </button>
              </li>
            );
          }
        })}

        {page < totalPages ? (
          <li>
            <button
              type="button"
              className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium text-teal-400 bg-white rounded-sm md:rounded-md hover:bg-teal-400 hover:text-white cursor-pointer"
              onClick={handleNext}
            >
              &rsaquo;
            </button>
          </li>
        ) : (
          ""
        )}
        {page < totalPages ? (
          <li>
            <button
              type="button"
              className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium text-teal-400 bg-white rounded-sm md:rounded-md hover:bg-teal-400 hover:text-white cursor-pointer"
              onClick={handleLastPage}
            >
              &raquo;
            </button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </section>
  );
};
