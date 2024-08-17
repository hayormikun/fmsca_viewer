import { ColumnFilter } from "./columnFilter";
import { formatDateTime } from "@/utils/utils";

export const COLUMNS = [
  {
    Header: "Created_DT",
    accessor: "created_dt",
    Filter: ColumnFilter,
    Cell: ({ value }: any) => {
      return formatDateTime(value);
    },
  },
  {
    Header: "Modified_DT",
    accessor: "data_source_modified_dt",
    Filter: ColumnFilter,
    Cell: ({ value }: any) => {
      return formatDateTime(value);
    },
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
    Header: "State Id",
    accessor: "id",
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
    Header: "Mailing Address",
    accessor: "mailing_address",
    Filter: ColumnFilter,
  },{
    Header: "Mcs 150 Form Date",
    accessor: "mcs_150_form_date",
    Filter: ColumnFilter,
  },
  {
    Header: "Mileage Year",
    accessor: "mcs_150_mileage_year",
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
    accessor: "mc_mx_ff_number",
    Filter: ColumnFilter,
  },
  {
    Header: "Duns Number",
    accessor: "duns_number",
    Filter: ColumnFilter,
  },
  {
    Header: "Drivers",
    accessor: "drivers",
    Filter: ColumnFilter,
  },
  {
    Header: "Power Units",
    accessor: "power_units",
    Filter: ColumnFilter,
  },
  {
    Header: "Out of Service Date",
    accessor: "out_of_service_date",
    Filter: ColumnFilter,
  },
];
