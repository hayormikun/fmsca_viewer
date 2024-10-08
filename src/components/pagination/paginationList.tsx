"use client";
import { PageContext } from "@/contexts/pageContext";
import { getTotalPages, paginationRange } from "@/utils/utils";
import React, { useContext, useEffect, useState } from "react";

type Props = {};

export const PaginationList = (props: Props) => {
  const {page, setPage} = useContext(PageContext);

  useEffect(() => {
    const cachedPage = localStorage.getItem("page");
    cachedPage ? setPage(Number(cachedPage)) : setPage(1);
  }, []);
  
  const totalPages = getTotalPages();
  const paginationArray = paginationRange(totalPages, page, 1);

  const handlePrev = () => {
    setPage((prev) => prev - 1);
    localStorage.setItem('page', page.toString()) 
  };

  const handleStartPage = () => {
    setPage(1);
    localStorage.setItem('page', page.toString()) 
  };

  const handleSelectedPage = (selected: number | string) => {
    if (selected === "... ") {
      setPage(1);
      localStorage.setItem('page', page.toString()) 
      return;
    }

    if (selected === " ...") {
      setPage(totalPages);
      localStorage.setItem('page', page.toString()) 
      return;
    }

    if (typeof selected === "number") {
      setPage(selected);
      localStorage.setItem('page', page.toString()) 
      return;
    }
  };

  const handleLastPage = () => {
    setPage(totalPages);
    localStorage.setItem('page', page.toString()) 
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
    localStorage.setItem('page', page.toString()) 
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
