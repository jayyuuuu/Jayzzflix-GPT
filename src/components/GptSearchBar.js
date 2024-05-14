import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKay = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API to get the movie results.

    const gptQuery =
      "Act as a movie recommandation system and suggest some movies for query : " +
      searchText.current.value +
      ". only give me names of 5 movies. Comma saperated like the example result given ahead. Example: yjhd, Bahubali, 12th fail, barfi, sholay.  ";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResult.choices);
    console.log(gptResult?.choices[0]?.message?.content);

    // yjhd, Bahubali, 12th fail, barfi, sholay.

    const gptMovies = gptResult?.choices[0]?.message?.content.split(",");

    //[yjhd, Bahubali, 12th fail, barfi, sholay]

    //For each movie we have to search TMDB Api.
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResult = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResult })
    );
    // console.log(tmdbResult);
  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className=" w-6/7 text-sm md:text-lg md:w-1/2 bg-black grid grid-cols-12 relative z-20"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-2 col-span-9"
          placeholder={lang[langKay].gptSearchPlaceholder}
        />
        <button
          className="py-2 m-2 px-4 col-span-3 rounded bg-blue-500 text-white"
          onClick={handleGptSearchClick}
        >
          {lang[langKay].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
