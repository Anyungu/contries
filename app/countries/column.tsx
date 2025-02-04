"use client";

import { ColumnDef } from "@tanstack/react-table";
import TableSorting from "../components/TableSorting";
import { Checkbox } from "@/components/ui/checkbox";
import { Country } from "@/lib/types";



export const columns: ColumnDef<Country>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: ({ column }) => <TableSorting column={column} title="Name" />,
    id: "name",
    accessorFn: (row) => row?.name?.official || "",
  },
  {
    header: ({ column }) => <TableSorting column={column} title="Region" />,
    id: "region",
    accessorFn: (row) => row?.region || "",
  },
  {
    header: ({ column }) => <TableSorting column={column} title="Capital" />,
    id: "capital",
    accessorFn: (row) => row?.capital?.[0] || "",
  },
  {
    header: ({ column }) => <TableSorting column={column} title="Flag" />,
    id: "flag",
    accessorFn: (row) => row?.flag || "",
  },
];
