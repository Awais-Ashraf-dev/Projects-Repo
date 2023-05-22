import React, { useRef } from 'react';
import { useState, useEffect, use } from 'react';

export default function PageReload() {
  const [reload, setreload] = useState(0);
  const increment_state=useRef(reload)

  useEffect(() => {
    increment_state.current=increment_state+1
  },[]);


  return (
    <div>
      <h1>This page is reloaded {increment_state.current} many times</h1>
    </div>
  );
}