import React from "react";
import musicData from "../../data/musicData";
import { Link } from "react-router-dom";
import SongItem from "../../components/SongItem";

const SearchPage = () => {
  const tracks = [...musicData];
  return (
    <>
      <div className="h-[100vh] bg-gradient-to-b from-stone-800 to-slate-900 text-white">
        <div className="flex justify-between items-center p-4 border-b-2  ">
          <div className="flex gap-4 text-3xl">
            <Link to="/">
              <i className="bx bx-arrow-back"></i>
            </Link>
          </div>
          <div className=" relative mx-auto text-gray-800">
            <input
              className="border-2 border-gray-300 bg-white h-8 px-5 pr-5 rounded-2xl text-sm focus:outline-none "
              type="search"
              name="search"
              placeholder="Search songs..."
            />
          </div>

          <div className="flex gap-4 text-3xl">
            <Link to="/playlist">
              <i className="bx bxs-playlist"></i>
            </Link>
          </div>
        </div>

        {musicData.map((track, index) => (
        <SongItem key={index} track={track} /> // Use SongItem component
      ))}
      </div>
    </>
  );
};

export default SearchPage;
