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
    <section>
      <ul>
        {page === 1 ? (
          ""
        ) : (
          <li>
            <span className="cursor-pointer" onClick={handleStartPage}>
              &laquo;
            </span>
          </li>
        )}
        {page === 1 ? (
          ""
        ) : (
          <li>
            <span className="cursor-pointer" onClick={handlePrev}>
              &lsaquo;
            </span>
          </li>
        )}
        {paginationArray.map((item) => {
          if (item === page) {
            return (
              <li
                className="text-white bg-teal-500 p-2 font-semibold"
                key={item}
              >
                <span
                  className="cursor-pointer"
                  onClick={() => handleSelectedPage(item)}
                >
                  {item}
                </span>
              </li>
            );
          } else {
            return (
              <li className="text-teal-500" key={item}>
                <span
                  className="cursor-pointer"
                  onClick={() => handleSelectedPage(item)}
                >
                  {item}
                </span>
              </li>
            );
          }
        })}

        {page < totalPages ? (
          <li>
            <span className="cursor-pointer" onClick={handleNext}>
              &rsaquo;
            </span>
          </li>
        ) : (
          ""
        )}
        {page < totalPages ? (
          <li>
            <span className="cursor-pointer" onClick={handleLastPage}>
              &raquo;
            </span>
          </li>
        ) : (
          ""
        )}
      </ul>
    </section>
  );
};
