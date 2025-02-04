"use client";

import { useCountryStore } from "@/store/country.store";

const CountryDetailPage = () => {
  const { country } = useCountryStore();
  console.log(country);
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center space-x-6 p-6">
          <div
            className="w-72 h-48 bg-cover rounded-lg shadow-md"
            style={{ backgroundImage: `url(${country?.flags.svg})` }}
          ></div>

          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-gray-900">
              {country?.name.common}
            </h1>
            <p className="text-gray-500 text-lg">{country?.name.official}</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-gray-700">Population</h2>
              <p className="text-gray-600">
                {country?.population.toLocaleString()}
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-medium text-gray-700">Languages</h2>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {Object.values(country?.languages || {}).map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-gray-700">Currency</h2>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {Object.values(country?.currencies || {}).map((curr, index) => (
                  <li key={index}>{curr.symbol}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg text-gray-700">Region</h3>
                <p className="text-gray-600">{country?.region}</p>
              </div>

              {country?.subregion && (
                <div className="space-y-2">
                  <h3 className="text-lg text-gray-700">Subregion</h3>
                  <p className="text-gray-600">{country?.subregion}</p>
                </div>
              )}

              <div className="space-y-2">
                <h3 className="text-lg text-gray-700">Timezones</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {country?.timezones?.map((timezone, index) => (
                    <li key={index}>{timezone}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
