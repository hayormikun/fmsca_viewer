import { PaginationList } from "@/components/pagination/paginationList";
import { UserDetails } from "@/components/userDetails";
import { Heading } from "@/components/table/heading";
import { PivotTable } from "@/components/pivotTable/pivotTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5 w-[96%] mx-auto">
      <Heading header="FMSCA Viewer"/>
      <UserDetails />
      <PaginationList />
      <PivotTable/>
    </main>
  );
}
