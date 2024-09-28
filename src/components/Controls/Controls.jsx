import React from 'react';
import './Controls.css';
import { Link } from 'react-router-dom';

const Controls = ({ isPlaying, onTogglePlay, onSkipPrevious, onSkipNext }) => {
  return (
    <div className="controls-container">
      <button aria-label="Loop">
        <i className="bx bx-repeat" />
      </button>
      <button aria-label="Skip Previous" onClick={onSkipPrevious}>
        <i className="bx bx-skip-previous" />
      </button>
      <button aria-label="Play" onClick={onTogglePlay}>
        <i className={`bx ${isPlaying ? 'bx-pause' : 'bx-play'}`} />
      </button>
      <button aria-label="Skip Next" onClick={onSkipNext}>
        <i className="bx bx-skip-next" />
      </button>
      <button aria-label="Playlist" >
      <Link to='/playlist'><i className='bx bxs-playlist'></i></Link>
      </button>
      
     
    </div>
  );
};

export default Controls;