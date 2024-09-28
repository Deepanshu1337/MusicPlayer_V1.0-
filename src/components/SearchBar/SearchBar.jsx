import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onAddToPlaylist }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false)

  const handleSearch = async () => {
    const accessToken = 'your-access-token';
    const response = await fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    const track = data.tracks.items[0];
    const song = {
      title: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      image: track.album.images[0].url,
      audio: track.preview_url,
    };
    onAddToPlaylist(song);
  };

  return (
    <div className="nav-bar-container">
    {visible ? (
      <input
        type="text"
        className="search-input"
        placeholder="Search for a song"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    ) : (
      <button className="search-button" onClick={handleSearch}>
        <i className="bx bx-search-alt-2" />
      </button>
    )}
  </div>
  );
};

export default SearchBar;