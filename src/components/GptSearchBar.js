import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKay = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12 relative z-20">
        <input
          type="text"
          className="p-2 m-2 col-span-9"
          placeholder={lang[langKay].gptSearchPlaceholder}
        />
        <button className="py-2 m-2 px-4 col-span-3 rounded bg-blue-500 text-white">
          {lang[langKay].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
