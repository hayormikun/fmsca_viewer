import { UserDetails } from "@/components/userDetails";
import Image from "next/image";

type Params = {
  params: { id: number };
};


export default function Details({ params: { id } }: Params) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserDetails id={id}/>
    </main>
  );
}
