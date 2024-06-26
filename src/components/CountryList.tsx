import { useEffect, useState } from "react"
import { PostCountries } from "../api/countriesApi";
import { Country } from "../types/Country"
import CountryCard from "./CountryCard";

export const CountryList = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [favoriteCountries, setFavoriteCountries] = useState<Country[]>([]);

    useEffect(() => {
      const fetchCountries = async () => {
        try{
          const data = await PostCountries();
          setCountries(data);
        }catch(error){
          console.log("에러",error);
        }
      };
  
      fetchCountries();
    }, []);


  const SelectFavoriteCountry = (country: Country) => {
    setFavoriteCountries((prev) => {
      if (prev.find((e) => e.name.common === country.name.common)) {
        return prev.filter((e) => e.name.common !== country.name.common);
      } else {
        return [...prev, country];
      }
    });
  };

  const SortContries = countries.filter((country) => !favoriteCountries.find((e) => e.name.common === country.name.common));

  return (
    <div className="p-6">
      <h2 className="text-2xl text-center mt-12 font-bold ">Favorite Countries</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-10">
        {favoriteCountries.map((country) => (
          <li key={crypto.randomUUID()}>
            <CountryCard country={country} isSelected={true} onClick={() => SelectFavoriteCountry(country)} />
          </li>
        ))}
      </ul>
      <h2 className="text-3xl font-bold text-center mt-12 mb-10">Countries</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {SortContries.map((country) => {
          return (
            <li key={crypto.randomUUID()}>
              <CountryCard country={country} isSelected={false} onClick={() => SelectFavoriteCountry(country)} />
            </li>
          );
        })}
      </ul>
  </div>
  
  )
}
