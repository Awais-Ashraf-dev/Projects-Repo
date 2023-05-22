import React from 'react'
import {useReducer} from 'react'

function hooks() {
   const [count,dispatch]=useReducer(reducer,0)
   function reducer(count,action){
    switch (action.tyoe) {
        case 'increment':
            return count +1;
            break;
        case 'decrement':
            return count -1;
            break;
        case 'reset':
            return 0;
            break;
        case 'add5':
            return count+5;
            break;
    
        default:
            count;
    }
   }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <button onClick={add5}>add 5</button>
    </div>
  )
}

export default hooks

/*
useState
useEffect
useRef
useCallback(memoization function)
useMemo(memoise value)
useReducer()-------state managment  hook
useContext(general data rkte hain jo child component me use hota h)
github ke folder states me documentation h hooks ki
------patteren---
1.observer patteren
  subject dispatch data to other
2. pub==sub model
  
*/
// const [first, setfirst] = useState(second)


// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third])

// const first = useRef(second)
// useCallback(
//   () => {
//     first
//   },
//   [second],
// )

// useMemo(() => first, [second])

// const first = useContext(second)
