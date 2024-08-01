"use client"
import React, { createContext, useState } from "react";

type PageType = {
  page: number ;
  setPage: React.Dispatch<React.SetStateAction<number>>
};

export const PageContext = createContext<PageType>({
    page: 1,
    setPage: ()=>{}
});

export const PageProvider = ({ children }: {children: React.ReactNode}) => {
  const [page, setPage] = useState<number>(1);

  return (
    <PageContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
