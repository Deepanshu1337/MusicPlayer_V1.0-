import React from "react";
import musicData from "../../data/musicData.js";
import { Link } from "react-router-dom";
import SongItem from "../../components/SongItem";

const PlaylistPage = () => {
  const playlistTracks = [...musicData];

  return (
    <>
      <div className="h-[100vh] bg-gradient-to-b from-stone-800 to-slate-900 text-white p-4">
      <div className="flex items-center gap-4 border-b-2 p-2" >
            <Link to="/">
              <i className="bx bx-arrow-back text-3xl "></i>
            </Link>

            <h1 className="font-semibold text-2xl">Playlist</h1>
          </div>
          {playlistTracks.map((track, index) => (
        <SongItem key={index} track={track} /> 
      ))}
      </div>

    </>
  );
};

export default PlaylistPage;
