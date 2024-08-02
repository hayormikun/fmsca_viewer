import React from "react";
import { ColumnFilter } from "./columnFilter";

export const COLUMNS = [
  {
    Header: "Created_DT",
    accessor: "created_dt",
    Filter: ColumnFilter,
  },
  {
    Header: "Modified_DT",
    accessor: "data_source_modified_dt",
    Filter: ColumnFilter,
  },
  {
    Header: "Entity",
    accessor: "entity_type",
    Filter: ColumnFilter,
  },
  {
    Header: "Operating Status",
    accessor: "record_status",
    Filter: ColumnFilter,
  },
  {
    Header: "Legal Name",
    accessor: "legal_name",
    Filter: ColumnFilter,
  },
  {
    Header: "DBA Name",
    accessor: "dba_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Physical Address",
    accessor: "physical_address",
    Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    accessor: "phone",
    Filter: ColumnFilter,
  },
  {
    Header: "DOT",
    accessor: "usdot_number",
    Filter: ColumnFilter,
  },
  {
    Header: "MC/MX/FF",
    accessor: "m_city",
    Filter: ColumnFilter,
  },
  {
    Header: "Power Units",
    accessor: "power_units",
    Filter: ColumnFilter,
  },
  {
    Header: "Out of Service Date",
    accessor: "mcs_150_form_date",
    Filter: ColumnFilter,
  },
];