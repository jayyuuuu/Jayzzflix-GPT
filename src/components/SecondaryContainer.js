import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);

  return (
    <div className="-mt-60 relative z-10 pl-10">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Must Watch"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Comedy"} movies={movies?.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
