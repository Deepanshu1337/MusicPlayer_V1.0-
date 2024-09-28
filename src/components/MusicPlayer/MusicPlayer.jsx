import React from 'react'
import './MusicPlayer.css'

const MusicPlayer = () => {
  return (
    <>
    <div className="main-container">
      <div className="icons-container">
        <i className="bx bxs-playlist playlist-icon" />
        <i className="bx bx-search-alt-2 search-icon" />
      </div>
      <div className="song-image-container">
        <img
          src="./assests/kyle-wong-rrHtkX1rLP0-unsplash.jpg"
          alt="Song Image"
        />
      </div>
      <div className="song-info">
        <div className="song-name">Song Title</div>
        <div className="singer-name">Artist Name</div>
      </div>
      <div className="progress-container">
        <div className="progress-bar-wrapper">
          <div className="progress-bar">
            <div className="progress-passed" />
            <input
              type="range"
              className="progress-slider"
              min={0}
              max={100}
              defaultValue={50}
              step={1}
              aria-label="Progress Slider"
            />
          </div>
        </div>
        <div className="progress-timers">
          <span className="start-time">00:00</span>
          <span className="end-time">03:45</span>
        </div>
      </div>
      <div className="controls-container">
        <button aria-label="Playlist">
          <i className="bx bxs-playlist" />
        </button>
        <button aria-label="Skip Previous">
          <i className="bx bx-skip-previous" />
        </button>
        <button aria-label="Play">
          <i className="bx bx-play" />
        </button>
        <button aria-label="Skip Next">
          <i className="bx bx-skip-next" />
        </button>
        <button aria-label="Repeat">
          <i className="bx bx-repeat" />
        </button>
      </div>
    </div>
  </>
  
  )
}

export default MusicPlayer