interface CountryProps {
  name: string;
  capital: string;
  population: number;
}

export default function CountryCard({
  name,
  capital,
  population,
}: CountryProps) {
  return (
    <div className="text-center m-10 bg-gray-500 rounded-lg">
      <h1 className="text-white text-center text-xl p-4">
        Country Name: {name}
      </h1>
      <h2 className="text-white text-center text-xl p-4">Capital: {capital}</h2>
      <h3 className="text-white text-center text-xl p-4">
        Population: {population}
      </h3>
    </div>
  );
}
