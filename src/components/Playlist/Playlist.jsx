import React from 'react';
import './Playlist.css';

const Playlist = ({ playlist, currentSongIndex }) => {
  return (
    <div className="playlist-container">
      <h3 className="playlist-title">Playlist</h3>
      <ul className="playlist-list">
        {playlist.map((song, index) => (
          <li
            key={index}
            className={`playlist-item ${index === currentSongIndex ? 'current-song' : ''}`}
          >
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;