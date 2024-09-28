import React from 'react';


const SongInfo = ({ currentSong }) => {
  return (
    <div className="relative h-[100%] rounded-t-2xl overflow-hidden shadow-2xl">
    <img src={currentSong.image} alt="Song Image" className="w-full h-[100%] object-cover " />
    <div className="absolute inset-0 bg-black opacity-50 "></div>
    <div className="absolute bottom-0 left-0 p-4 text-white">
      <div className="song-name font-bold text-lg">{currentSong.title}</div>
      <div className="singer-name text-base">{currentSong.artist} - {currentSong.album}</div>
    </div>
  </div>
  );
};

export default SongInfo;