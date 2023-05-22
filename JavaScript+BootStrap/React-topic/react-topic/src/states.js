import React from 'react'
import { useState } from 'react'


export default function States() {
        const[counter, setCounter]=useState(0)
        const plusclick=()=>{
            setCounter(counter+1)
        }
        const minusclick=()=>{
            setCounter(counter-1)
        }
  return(
        <div>       
            <button onClick={plusclick}>Click here for increment</button>
            <button onClick={minusclick}>Click here for decrement</button>
            <h1>{counter}</h1>
        </div>
  )
}

