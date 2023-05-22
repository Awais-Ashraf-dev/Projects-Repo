import React, { useEffect, useState } from "react"
import "./Home.css"
import axios from "axios"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import MovieList from "../../components/movieList/movieList";

export default function Home() {
  const [PopularMovies, setPopularMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=37e02ea2fe858294e429030a8ee3c6b8`;
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response);
      setPopularMovies(response.data.results);
    });
  }, []);
  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {PopularMovies.map((movie) => (
            <Link style={{textDecoration:"none",color:"white"}} to={`/movies/${movie.id}`}>
            <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
            </div>
            <div className="posterImage_overlay">
              <div className="posterImage_title">{movie? movie.original_title:""}</div>
              <div className="posterImage_runtime">{movie? movie.release_date:""}</div> 
              <span className="posterImage_rating">
                {movie? movie.vote_average:""}
                <i className="fas fa-star"/>{" "}
              </span>

            </div>
            <div className="posterImage_description">
                {movie ? movie.overview:""}
            </div>
            </Link>
        ))}
      </Carousel>
      <MovieList/>
     
    </div>
  );
}
