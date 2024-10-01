import React, {useState} from "react";
import PlayerContext from "./PlayerContext";
import musicData from "../data/musicData";


const PlayerContextProvider = ({children})=>{
    const [currentTrack, setCurrentTrack] = useState(musicData[0]);
    const [playList, setPlayList] = useState([]);
    return (
        <PlayerContext.Provider value={{currentTrack, setCurrentTrack, playList, setPlayList}}>
            {children}
        </PlayerContext.Provider>
    )

} 

export default PlayerContextProvider;