import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title);
  console.log(
    "----------------------------------------------------------------------------"
  );
  console.log(movies);
  // if (!movies) return;
  return (
    <div className="p-4">
      <h1 className=" py-4 text-xl text-white font-bold">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
