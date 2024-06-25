import React from 'react';
import { Country } from '../types/Country';

interface CountryCard {
  country: Country;
  isSelected: boolean;
  onClick: () => void;
}

const CountryCard: React.FC<CountryCard> = ({ country, isSelected, onClick}) => {
  return (
    <div
    className={`p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform cursor-pointer ${isSelected ? 'border-4 border-green-500' : ''}`}
    onClick={onClick}
  >
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className='w-20 h-auto mx-auto mb-4'/>
      <h2 className='text-xl font-bold mb-2'>{country.name.common}</h2>
      <p className='text-gray-600'> {country.capital}</p>
    </div>
  );
};

export default CountryCard;
