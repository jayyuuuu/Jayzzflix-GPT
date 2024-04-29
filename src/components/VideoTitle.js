import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="w-2/5 pt-3">{overview}</p>
      <div className="my-2">
        <button className=" mr-4 border border-black font-semibold px-4 py-1 bg-white text-black rounded-sm    ">
          <svg
            class="h-6 w-6 text-black inline-flex"
            viewBox="0 2 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="5"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          >
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>{" "}
          Play
        </button>
        <button className=" mr-4 border text-white font-semibold border-black px-4 py-1 bg-gray-400 rounded-sm ">
          <svg
            class="h-6 w-6 text-white inline-flex mr-2"
            viewBox="0 1 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
