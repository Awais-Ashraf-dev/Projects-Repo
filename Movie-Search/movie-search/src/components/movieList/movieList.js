import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieList() {
  const { type } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${
    type ? type : "popular"
  }?api_key=37e02ea2fe858294e429030a8ee3c6b8&language=en-US&page=1`;

  const [MovieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMovieList(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response);
      setMovieList(response.data.results);
    });
  }, [type]);

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list_card">
        {MovieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
}
