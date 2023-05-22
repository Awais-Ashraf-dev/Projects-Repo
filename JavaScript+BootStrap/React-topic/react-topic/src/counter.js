import React from 'react'
import { useState } from 'react'


export default function Counter() {
        const[counter, setCounter]=useState(0)
        setTimeout(()=>{
            setCounter(counter+1)
        },1000)
  return(
        <div>       
            <h1>{counter}</h1>
        </div>
  )
}

