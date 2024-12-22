import React from 'react';
import { useParams } from 'react-router-dom';
import { countries } from '../DummyData'; // Import the data array

const CountryPage = () => {
  const { id } = useParams(); // Get the country id from the URL
  const country = countries.find((item) => item.id === parseInt(id)); // Find the country data by id

  if (!country) {
    return <div>Country not found!</div>;
  }

  return (
    <div className='flex pt-8 flex-col justify-center items-center w-full'>
      <h1 className='font-bold text-3xl'>Welcome to {country.name}</h1>
      <img src={country.logo} alt={country.name} className="h-20 w-40" />
      {/* Add more content here based on the country */}
    </div>
  );
};

export default CountryPage;
