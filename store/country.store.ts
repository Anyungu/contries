import { Country } from "@/lib/types";
import { create } from "zustand";

type CountryStore = {
  country: Country | null;
  setActiveCountry: (data: Country) => void;
};

export const useCountryStore = create<CountryStore>((set) => ({
  country: null,
  setActiveCountry: (data: Country) =>
    set((state) => {
      return { ...state, country: data };
    }),
}));
