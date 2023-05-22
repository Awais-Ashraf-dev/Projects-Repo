import React from 'react'
import { useReducer } from 'react'

function reducer(count, action) {
    switch(action.type){
        case 'increment':
            return count + 1
        case 'decrement':
            return count -1
        case '5 increment':
            return count + 5
        case 'reset':
            return count+action.payload.amount  ;
    }
}
    export default function Counter(){
    const[count, dispatch] = useReducer(reducer,0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({type:'increment'})}>Increment</button>
      <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
      <button onClick={() => dispatch({type:'5 increment'})}>Increment 5</button>
      <button onClick={() => dispatch({type:'reset'} , {payload:{amount:5}})}>Reset</button>
    </div>
  )
}
