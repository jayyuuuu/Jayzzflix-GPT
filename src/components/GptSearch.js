import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img
        className=" w-full h-screen object-cover  md:h-auto fixed "
        src={BG_IMG_URL}
        alt="Background Img"
      ></img>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
