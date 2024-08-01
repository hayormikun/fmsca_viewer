import Link from "next/link";
import React from "react";

type EntiityProps = {
  id: number
  legalName: string
  physical_address: string
  status: string
};

export const UserData = ({id, legalName, physical_address, status}: EntiityProps) => {
  return (
    <Link href={`/details/${id}`}>
      <div className="w-full bg-white relative flex items-center h-[4.375rem] rounded-[.625rem] md:rounded-xl shadow-sm px-[1.25rem]">
        <div className="flex flex-col gap-1 ml-4 mr-14 text-blackText">
          <h3 className="text-sm md:text-base font-semibold line-clamp-2">
            {legalName}
          </h3>
          <div className="flex items-center text-[.625em] md:text-sm gap-2 opacity-90">
            {physical_address}
          </div>
        </div>
        <div className="w-14 md:w-16 h-4 flex items-center justify-center absolute right-4 top-4 text-[.5em] md:text-[.625em] tracking-wide font-semibold bg-gray-200 rounded-sm">
          {status}
        </div>
      </div>
    </Link>
  );
};
