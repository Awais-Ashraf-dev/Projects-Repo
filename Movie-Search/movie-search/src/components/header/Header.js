import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerLeft">
            <Link to="/"><img className='header_icon' src="https://png2.cleanpng.com/sh/885b68ab8ffcfe83055ffc3024463439/L0KzQYm3VsE1N5J2fpH0aYP2gLBuTflubJMyhNHwbz33db3slvl0cZDzRdhybH2web7rgr02amM4S6lsNELldLXrU74zO2U4Sao9MEG4Qoq3U8Q3QWM2T6sCLoDxd1==/kisspng-imdb-logo-television-film-imdb-5b2337c42bddd3.2343184015290346921797.png" alt='Logo'/> </Link>
            <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated"style={{textDecoration:"none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming"style={{textDecoration:"none"}}><span>Upcoming</span></Link>
        </div>
      
    </div>
  )
}


