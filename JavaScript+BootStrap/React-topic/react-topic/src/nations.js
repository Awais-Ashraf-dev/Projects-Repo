import React from 'react'
import { useState } from 'react'
import  countriesData from './data'

export default function Nationdata() {
        const[index, setindex]=useState(0)
        const nextindex=()=>{
            setindex(index+1)
        }
        const[data, setdata]=useState([]);
        const nextnation=()=>{
            nextindex();
            setdata(countriesData[index+1])
        }
        
  return(
        <div>
            <h1>{data.name}</h1>
            <button onClick={nextnation}>Click here</button>
        </div>
  )
}


