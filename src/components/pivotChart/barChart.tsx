"use client";
import { useContext, useEffect, useMemo, useState } from "react";
import {
  IDataOptions,
  IDataSet,
  PivotViewComponent,
  Inject,
  DisplayOption,
  PivotChart,
  FieldList,
  VirtualScroll,
} from "@syncfusion/ej2-react-pivotview";
import { ChartSettings } from "@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings";
import { outOfServiceCompanies } from "@/utils/utils";
import { Heading } from "../table/heading";

export function BarChart() {
  const [data, setData] = useState<any>([]);
  useMemo(() => setData(outOfServiceCompanies()), []);

  let displayOption: DisplayOption = {
    view: "Chart",
  } as DisplayOption;

  let chartSettings: ChartSettings = {
    chartSeries: { type: "Column" },
  } as ChartSettings;

  let dataSourceSettings: IDataOptions = {
    dataSource: data,
    expandAll: false,
    rows: [{ name: "Month" }],
    columns: [{ name: "Year" }],
    values: [{ name: "legal_name", caption: "Company" }],
    filters: [],
  };

  // let pivotObj: PivotViewComponent;
  return (
    <section className="w-full flex flex-col mt-3 gap-5">
      <Heading header="Pivot Chart" />
      <PivotViewComponent
        height={750}
        // ref={(d: any) => (pivotObj = d)}
        id="PivotView"
        dataSourceSettings={dataSourceSettings}
        enableVirtualization={true}
        chartSettings={chartSettings}
        displayOption={displayOption}
      >
        <Inject services={[PivotChart]} />
      </PivotViewComponent>
    </section>
  );
}
