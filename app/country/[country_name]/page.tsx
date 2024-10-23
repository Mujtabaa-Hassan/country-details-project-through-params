"use client";

import { useParams } from "next/navigation";
import CountryCard from "@/components/countryCard";
export default function CountryDetails() {
  const { country_name } = useParams();

  const countries = [
    { name: "Pakistan", capital: "Islamabad", population: 220000000 },
    { name: "Iran", capital: "Tehran", population: 83995249 },
    { name: "Iraq", capital: "Baghdad", population: 42268021 },
    { name: "Turkey", capital: "Istanbul", population: 40172458 },
    { name: "Germany", capital: "Berlin", population: 40172458 },
  ];

  const selectedCountry = countries.find(
    (country) =>
      country.name.toLowerCase() ===
      country_name.toString().trim().toLowerCase()
  );

  if (!selectedCountry) {
    return (
      <div className="text-center m-10 bg-gray-500 rounded-lg">
        <h1 className="text-white text-center text-2xl">Country Not Found!</h1>
      </div>
    );
  }

  return (
    <CountryCard
      name={selectedCountry.name}
      capital={selectedCountry.capital}
      population={selectedCountry.population}
    />
  );
}
