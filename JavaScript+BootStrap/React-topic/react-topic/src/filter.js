import React from 'react'
import countries from './data'

export default function Filter() {
  return ( 
    <div>
      <div>          
  {countries.filter((country) => {
    if (country.name === "Denmark")
        return (<li>
            {country.name}
                  </li>)}
                  )
        }
        </div>
        </div>
        )}
        


             




