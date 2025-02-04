import { columns } from "./countries/column";
import { SafsarDataTable } from "./countries/table";

export default async function Home() {
  const data = await fetch("https://restcountries.com/v3.1/all");
  const countries = await data.json();
  return (
    <div className=" p-10">
      <SafsarDataTable columns={columns} data={countries} />
    </div>
  );
}
