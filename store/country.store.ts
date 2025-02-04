import { Country } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CountryStore = {
  country: Country | null;
  setActiveCountry: (data: Country) => void;
};

export const useCountryStore = create<CountryStore>()(
  persist(
    (set) => ({
      country: null,
      setActiveCountry: (data: Country) => set({ country: data }),
    }),
    {
      name: "country-storage",
    }
  )
);
