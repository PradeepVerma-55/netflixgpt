import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 w-screen aspect-video px-24
    pt-[20%]
    absolute text-white bg-gradient-to-t from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-xl
         rounded-lg font-bold hover:bg-opacity-80
        ">▶ Play</button>
        <button className="mx-2 bg-white text-black p-4 px-12 text-xl
         rounded-lg font-bold hover:bg-opacity-80">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
