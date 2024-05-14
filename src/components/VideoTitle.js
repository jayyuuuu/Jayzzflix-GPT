import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] md:pt-[15%] px-5 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block w-2/5 pt-3">{overview}</p>
      <div className="mt-2 md:mt-8">
        <button className=" mr-4 border text-sm md:text-md border-black font-semibold px-2 pt-0.5 md:px-5 md:py-3 bg-white text-black rounded-sm  hover:bg-opacity-80  ">
          <svg
            className="h-6 w-6 text-black inline-flex"
            viewBox="0 2 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          >
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>{" "}
          Play
        </button>
        <button className="hidden md:inline-block text-sm md:text-md mr-4 border text-white font-semibold border-black px-2 py-1 md:px-5 md:py-3 bg-gray-400 rounded-sm hover:bg-opacity-80">
          <svg
            className="h-6 w-6 text-white inline-flex mr-2"
            viewBox="0 1 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <circle cx="12" cy="12" r="10" />{" "}
            <line x1="12" y1="16" x2="12" y2="12" />{" "}
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
