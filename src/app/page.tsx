"use client";
import { Fragment, useContext, useMemo, useState } from "react";
import { UserData } from "../components/userData";
import { fetchData } from "@/utils/utils";
import { PaginationList } from "@/components/pagination/paginationList";
import { PageContext } from "@/contexts/pageContext";

export default function Home() {
  const [data, setData] = useState<any>(null);

  const { page } = useContext(PageContext);
  useMemo(() => setData(fetchData(page)), [page]);

  return (
    <main className="flex min-h-screen flex-col w-[60%] mx-auto">
      {data !== null && (
        <>
          {data.map((item: any) => {
            return (
              <Fragment key={item?.id}>
                <UserData
                  id={item?.id}
                  legalName={item?.legal_name}
                  physical_address={item?.physical_address}
                  status={item?.record_status || "unknown"}
                />
              </Fragment>
            );
          })}
        </>
      )}
      <PaginationList />
    </main>
  );
}
