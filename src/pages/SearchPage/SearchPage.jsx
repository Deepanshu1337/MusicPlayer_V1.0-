import React, { useState } from "react";

const SearchPage = () => {
  const [tracks, setTracks] = useState([
    { title: "Moonlight Serenade", singer: "Ella Fitzgerald" },
    { title: "Electric Dreams", singer: "John Williams" },
    { title: "City of Stars", singer: "Ryan Gosling" },
    { title: "Golden Horizon", singer: "Adele Harper" },
    { title: "Whispers in the Dark", singer: "Michael Collins" },
    { title: "Ocean Breeze", singer: "Lana Del Rey" },
    { title: "Fire in the Rain", singer: "Jason Turner" },
    { title: "Echoes of You", singer: "Sia Freeman" },
    { title: "Dancing in the Sky", singer: "Taylor Swift" },
    { title: "Starlit Memories", singer: "Bruno Mars" },
  ]);

  return (
    <>
      <div className="h-16 px-2 backdrop-blur-sm bg-black flex flex-col gap-0  border-b">
        <ul className="flex h-full justify-start items-center gap-4 text-gray-400 p-2 font-medium text-lg ">
          <li className=" text-white">
            <button className="hover:border-b-2 hover:border-gray-400">Songs</button>
          </li>
          <li>
            <button className="hover:border-b-2 hover:border-gray-400">Artist</button>
          </li>
        </ul>
      </div>
      <div className="h-[1000px] backdrop-blur-sm bg-black/95">
        {tracks.map((track, index) => {
          return (
            <div
              key={index}
              className="flex items-start gap-1 py-6 px-4 border-b text-white"
            >
              <div>
                <img src="" alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold">{track.title}</h3>
                <p className="text-base text-gray-400">{track.singer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchPage;
