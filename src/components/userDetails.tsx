"use client";
import React, { useMemo, useState } from "react";
import { Heading } from "./table/heading";
import { RowData } from "./table/rowData";
import { fetchUserData } from "@/utils/utils";

type Props = {
  id: number;
};

export const UserDetails = ({ id }: Props) => {
  const [data, setData] = useState<any>(null);
  
  useMemo(() => setData(fetchUserData(id)), [id]);

  return (
    <section className="w-full">
      <table className="w-[80%] mx-auto flex flex-col">
        <thead className="w-full">
          <tr className="flex gap-2">
            <Heading header={"Created_DT"} />
            <Heading header={"Modified_DT"} />
            <Heading header={"Entity"} />
            <Heading header={"Operating Status"} />
            <Heading header={"Legal Name"} />
            <Heading header={"DSA Name"} />
            <Heading header={"Physical Address"} />
            <Heading header={"Phone"} />
            <Heading header={"DOT"} />
            <Heading header={"MC/MX/FF"} />
            <Heading header={"Power Units"} />
            <Heading header={"Out of Service Date"} />
          </tr>
        </thead>
        {data !== null &&
        <tbody>
          <tr className="w-full">
            <RowData data={data.created_dt} />
            <RowData data={data.data_source_modified_dt} />
            <RowData data={data.entity_type} />
            <RowData data={data.record_status} />
            <RowData data={data.legal_name} />
            <RowData data={data.dba_name} />
            <RowData data={data.physical_address} />
            <RowData data={data.phone} />
            <RowData data={data.usdot_number} />
            <RowData data={data.m_city} />
            <RowData data={data.power_units} />
            <RowData data={data.mcs_150_form_date} />
          </tr>
        </tbody>}
      </table>
    </section>
  );
};
