import React from "react";
import SongImg from '../../assests/download.jpg'

const MainPage = () => {
  return (
    <>
   <div className="main-page">
      <img 
        src={SongImg}
        alt="Song Image" 
        className="song-image w-1/2 h-1/2 rounded-[50%]" 
        
      />
    </div>
    </>
  );
};

export default MainPage;
