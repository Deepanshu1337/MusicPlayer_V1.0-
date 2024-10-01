import React, {useState} from "react";
import PlayerContext from "./PlayerContext";
import musicData from "../data/musicData";


const PlayerContextProvider = ({children})=>{
    const [currentTrack, setCurrentTrack] = useState(musicData[0]);
    return (
        <PlayerContext.Provider value={{currentTrack, setCurrentTrack}}>
            {children}
        </PlayerContext.Provider>
    )

} 

export default PlayerContextProvider;