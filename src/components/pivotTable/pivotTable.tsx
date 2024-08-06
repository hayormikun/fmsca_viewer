"use client";
import {
  IDataSet,
  IDataOptions,
  PivotViewComponent,
  Inject,
  FieldList,
  VirtualScroll,
} from "@syncfusion/ej2-react-pivotview";
import { Heading } from "@/components/table/heading";
import entity from "@/data/FMSCA.json";

const { records }: any = entity;

export const PivotTable = () => {
  let dataSourceSettings: IDataOptions = {
    columns: [{ name: "created_dt", caption: "Created_DT" }],
    dataSource: records,
    expandAll: false,
    filters: [{ name: "data_source_modified_dt", caption: "Modified_DT" }],

    rows: [
      { name: "entity_type", caption: "Entity" },
      { name: "record_status", caption: "Operating Status" },
    ],
    values: [
      { name: "legal_name", caption: "Total Legal Name" },
      { name: "physical_address", caption: "Total Physical Address" },
      { name: "dba_name", caption: "Total DBA Name" },
      { name: "phone", caption: "Total Phone" },
      { name: "usdot_number", caption: "Total DOT" },
      { name: "power_units", caption: "Total Power Units" },
      { name: "mc_mx_ff_number", caption: "Total MC/MX/FF" },
      { name: "out_of_service_date", caption: "Total Out of Service Date" },
    ],
  };
  return (
    <section className="w-full flex flex-col mt-3 gap-5">
      <Heading header="Pivot Table" />
      <PivotViewComponent
        id="PivotView"
        height={700}
        width={"100%"}
        enableVirtualization={true}
        allowDataCompression={true}
        dataSourceSettings={dataSourceSettings}
        showFieldList={true}
      >
        <Inject services={[FieldList, VirtualScroll]}></Inject>
      </PivotViewComponent>
    </section>
  );
};
