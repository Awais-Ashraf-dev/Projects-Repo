import React, { useState, useEffect } from 'react'

export default function Hooks() {
    const [count, setCount] = useState(0)
    useEffect(()=>{

    })

  return (
    <div>
      <h1> I am rendering it {count} times!</h1>
    </div>
  )
}
