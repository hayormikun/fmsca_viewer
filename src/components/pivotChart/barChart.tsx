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

export function BarChart() {
  const [data, setData] = useState<any>([]);
  useMemo(() => setData(outOfServiceCompanies()), []);

  let displayOption: DisplayOption = {
    view: "Chart",
  } as DisplayOption;

  let chartSettings: ChartSettings = {
    chartSeries: { type: "Bar" },
  } as ChartSettings;

  let dataSourceSettings: IDataOptions = {
    dataSource: data,
    expandAll: false,
    rows: [{ name: "out_of_service_date", caption: "OOS month" }],
  columns: [{ name: "legal_name", caption: "Legal Name" }],
    values: [
      { name: "drivers", caption: "Drivers" },
    ],
    filters: [],
  };

  let pivotObj: PivotViewComponent;
  return (
    <PivotViewComponent
      height={750}
      ref={(d: any) => (pivotObj = d)}
      id="PivotView"
      enableVirtualization={true}
      allowDataCompression={true}
      chartSettings={chartSettings}
      displayOption={displayOption}
      dataSourceSettings={dataSourceSettings}
    >
      <Inject services={[PivotChart, VirtualScroll]} />
    </PivotViewComponent>
  );
}
