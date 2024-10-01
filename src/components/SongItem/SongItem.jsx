import React,{useContext} from "react";
import { Link } from "react-router-dom";
import PlayerContext from "../../context/PlayerContext";

const SongItem = ({ track }) => {

    const{setCurrentTrack} = useContext(PlayerContext);
    

  return (
    <div className="flex items-center gap-4 p-4 border-b-2" onClick={()=>setCurrentTrack(track)}>
      <Link to='/'>
        <img
          src={track.image}
          alt={track.title}
          className="h-[60px] w-[60px] rounded-full"
        />
      </Link>
      <div>
        <h2 className="font-semibold text-xl">{track.title}</h2>
        <h3 className="text-sm text-gray-400">{track.artist}</h3>
      </div>
    </div>
  );
};

export default SongItem;
