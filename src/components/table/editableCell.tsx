"use client";
import { formatDateTime } from "@/utils/utils";
import { ChangeEvent, useEffect, useState } from "react";

type Props = {
  value: string;
  row: { index: number };
  column: { id: string };
  updateData: (rowIndex: number, columnId: string, value: any) => void;
};

export const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateData,
}: Props) => {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<boolean>(false);



  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const validateDateTime = (dateTime: string) => {
    const dateTimeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
    return dateTimeRegex.test(dateTime);
  };

  const validateDate = (date: string) => {
    const dateTimeRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateTimeRegex.test(date);
  };

  const handleBlur = () => {
    if (
      id === "data_source_modified_dt"
    ) {
      if (!validateDateTime(value)) {
        setValue("Invalid date")
        setError(true);
        return;
      }
    }
    
    if (
      id === "mcs_150_form_date" ||
      id === "out_of_service_date" ||
      id === "nun_dt"
    ) {
      if (!validateDate(value)) {
        setValue("Invalid date")
        setError(true);
        return;
      }
    }
    updateData(index, id, value);
  };

  
  
 

  // Cell: ({ value }: any) => {
  //   return formatDateTime(value);
  // },

  return (
      <input
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        style={{ color: error ? "red": ""}}
        className="text-xs bg-transparent capitalize cursor-text tracking-wide text-left box-border"
        value={value}
      />
  );
};
