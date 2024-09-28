import React from 'react';
import './SongInfo.css';

const SongInfo = ({ currentSong }) => {
  return (
    <div className="song-image-container">
      <img src={currentSong.image} alt="Song Image" />
      <div className="song-info">
        <div className="song-name">{currentSong.title}</div>
        <div className="singer-name">{currentSong.artist} - {currentSong.album}</div>
      </div>
    </div>
  );
};

export default SongInfo;