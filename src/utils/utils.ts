import entity from "@/data/FMSCA.json";
import { format, parse } from "date-fns";
import _ from "lodash";

const { records }: any = entity;
const limit = 25;

export const formatDateTime = (datetime: string): string => {
  const temp = datetime.split("+");
  const data = temp[0].split("-").join("/");

  return data;
};

export const fetchData = (page: number) => {
  const data = [];

  for (let i = (page - 1) * limit; i < page * limit && records[i]; i++) {
    data.push(records[i]);
  }

  return data;
};

export const fetchSearchedData = (searchTerm: string, page: number) => {
  const data = [];

  const filteredData = records.filter((item: object) => {
    Object.values(item).some((value) => {
      value.toString().toLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
  });

  if (filteredData.length > 1) {
    for (
      let i = (page - 1) * limit;
      i < page * limit && filteredData.length;
      i++
    ) {
      data.push(filteredData[i]);
    }
  } else {
    for (let i = (page - 1) * limit; i < page * limit && records[i]; i++) {
      data.push(records[i]);
    }
  }

  return data;
};

export const fetchPivotSearchedData = (searchTerm: string) => {
  const data = [];

  const filteredData = records.filter((item: object) => {
    Object.values(item).some((value) => {
      value.toString().toLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
  });

  if (filteredData.length > 1) {
    for (let i = 0; i < filteredData.length; i++) {
      data.push(filteredData[i]);
    }
  } else {
    for (let i = 0; i < records[i]; i++) {
      data.push(records[i]);
    }
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

export const outOfServiceCompanies = () => {
  const data: any = [];

  for (let i = 0; i < records.length; i++) {
    if (records[i].out_of_service_date && records[i].legal_name) {
      const parsedDate = parse(
        records[i].out_of_service_date,
        "MM/dd/yyyy",
        new Date()
      );
      const formattedMonth = format(parsedDate, "MMM");
      const formattedYear = format(parsedDate, "yy");

      data.push({
        legal_name: records[i].legal_name,
        Month: formattedMonth,
        Year: formattedYear,
      });
    }
  }
  return data;
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
    return [...range, " ...", total];
  }
};
