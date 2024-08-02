import entity from "@/data/FMSCA.json";
import _ from "lodash";

const { records }: any = entity;
const limit = 15;

export const fetchData = (page: number) => {
  const data = [];

  for (let i = (page - 1) * limit; i < (page * limit) && records[i]; i++) {
    data.push(records[i]);
  }

  return data;
};

export const fetchUserData = (id: number) => {
  const data = records.find((record: any) => {
    return record.id == id;
  });

  if (data != undefined) {
    return data;
  } else {
    throw new Error("can't find details for this user");
  }
};

export const getTotalPages = () => {
  const total = Math.ceil(records.length / limit);
  return total;
};

export const paginationRange = (
  total: number,
  page: number,
  siblings: number
) => {
  const displayedPages = 7 + siblings;
  if (displayedPages >= total) {
    return _.range(1, total + 1);
  }

  const leftSiblingsIndex = Math.max(page - siblings, 1);
  const rightSiblingsIndex = Math.min(page + siblings, total);
  const showLeftDots = leftSiblingsIndex > 2;
  const showRightDots = rightSiblingsIndex < total - 2;

  if (!showLeftDots && showRightDots) {
    const leftItems = 3 + 2 * siblings;
    const range = _.range(1, leftItems + 1);
    return [...range, " ...", total];
  } else if (showLeftDots && !showRightDots) {
    const rightItems = 3 + 2 * siblings;
    const range = _.range(total - rightItems + 1, total + 1);
    return [1, "... ", ...range];
  } else {
    const range = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
    return [ ...range, " ...", total];
  }
};
