import React, {useContext} from "react";
import { Link } from "react-router-dom";
import SongItem from "../../components/SongItem";
import PlayerContext from "../../context/PlayerContext.js";

const PlaylistPage = () => {

  const {playList} = useContext(PlayerContext)
  return (
    <>
      <div className="h-[100vh] bg-gradient-to-b from-stone-800 to-slate-900 text-white p-4">
      <div className="flex items-center gap-4 border-b-2 p-2" >
            <Link to="/">
              <i className="bx bx-arrow-back text-3xl "></i>
            </Link>

            <h1 className="font-semibold text-2xl">Playlist</h1>
          </div>
          {playList.length === 0 
          ? "Playlist is empty" 
          :playList.map((track, index) => (
        <SongItem key={index} track={track} /> 
      ))}
      </div>

    </>
  );
};

export default PlaylistPage;
