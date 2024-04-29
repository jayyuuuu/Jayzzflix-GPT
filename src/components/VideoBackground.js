import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movie_id }) => {
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1096197/videos",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => (video.type = "Trailer"));
    const trailer = filterData.lenght ? filterData[0] : json.results[0];
    console.log(trailer);
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
  return <div>VideoBackground</div>;
};

export default VideoBackground;
