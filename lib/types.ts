export type Country = {
  name: { common: string; official: string };
  flag: string;
  capital: [string];
  region: string;
  subregion: string;
  flags: { svg: string };
  population: number;
  languages: { [key: string]: string };
  currencies: { [key: string]: { name: string; symbol: string } };
  timezones: [string]
};
