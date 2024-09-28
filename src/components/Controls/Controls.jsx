import React from 'react';
import './Controls.css';

const Controls = ({ isPlaying, onTogglePlay, onSkipPrevious, onSkipNext }) => {
  return (
    <div className="controls-container">
      <button aria-label="Shuffle">
        <i className="bx bx-shuffle" />
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
      <button aria-label="Loop">
        <i className="bx bx-repeat" />
      </button>
    </div>
  );
};

export default Controls;