import { Fragment, useContext, useMemo, useState } from "react";
import { PaginationList } from "@/components/pagination/paginationList";
import { UserDetails } from "@/components/userDetails";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full mx-auto">
      <UserDetails />

      <PaginationList />
    </main>
  );
}
