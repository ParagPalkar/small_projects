import React, { useState } from 'react'

const Countries = () => {
    const myCountries = [
        {
          name: "Japan",
          capital: "Tokyo",
          language: "Japanese",
          population: 125832857,
          currency: "Japanese Yen (JPY)"
        },
        {
          name: "Italy",
          capital: "Rome",
          language: "Italian",
          population: 60422571,
          currency: "Euro (EUR)"
        },
        {
          name: "Mexico",
          capital: "Mexico City",
          language: "Spanish",
          population: 128915307,
          currency: "Mexican Peso (MXN)"
        },
        {
          name: "Kenya",
          capital: "Nairobi",
          language: "English, Swahili",
          population: 56257049,
          currency: "Kenyan Shilling (KES)"
        },
        {
          name: "Australia",
          capital: "Canberra",
          language: "English",
          population: 25769444,
          currency: "Australian Dollar (AUD)"
        }
      ];

      console.log(myCountries);
      
      const [index, setIndex] = useState(0);
      let country = myCountries[index];
      let ln = myCountries.length-1;
      console.log(ln);
      

      const handleClick = () => {
        console.log(index);
        (index <= myCountries.length-2) ? setIndex(index + 1) : setIndex(0)
      }
   
    
  return (
    <div>
        <h1>Countries</h1>
        <div className="card">
            <div className="details">
                <h2>Name: {country.name}</h2>
                <h2>Capital: {country.capital}</h2>
                <h2>Currency: {country.currency}</h2>
                <h2>Language: {country.language}</h2>
                <h2>Population: {country.population}</h2>
            
                    
            </div>
            <button onClick={handleClick}>Change Country</button>
        </div>
    </div>
  )
}

export default Countries