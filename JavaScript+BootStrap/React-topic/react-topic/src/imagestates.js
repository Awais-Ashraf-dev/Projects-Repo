import React from 'react'
import { useState } from 'react'


export default function ImageStates() {
    
        const[image, setImage]=useState('https://source.unsplash.com/300x300/?dog')
        const onclick=()=>{
            if(image.includes('dog'))
            setImage('https://source.unsplash.com/300x300/?cat')
            else
            setImage('https://source.unsplash.com/300x300/?dog')

        }
  return(
        <div>       
            <div className='container'>
                <img src={image}></img>
            </div>
            <button onClick={onclick}>Click here</button>
            </div>
              )

    
            }
            