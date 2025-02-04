import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import React from "react";

type Props<TData> = {
  table: Table<TData>;

};
function CountryFilter<TData>({ table }: Props<TData>) {

  return (
    <>
      <div className="flex w-full items-center py-2 justify-between">
        <Input
          placeholder={`Search...`}
          value={table.getState().globalFilter ?? ""}
          onChange={(event) => {
            console.log(event.target.value)
            table.setGlobalFilter(event?.target?.value?.toLowerCase());
          }}
          className="max-w-sm"
        />
      </div>
    </>
  );
}

export default CountryFilter;
