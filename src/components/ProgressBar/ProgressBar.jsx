import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentTime, duration, onSeek }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="progress-container">
      <div className="progress-bar-wrapper">
        <div className="progress-bar">
          <div className="progress-passed" style={{ width: `${(currentTime / duration) * 100}%` }} />
          <input
            type="range"
            className="progress-slider"
            min="0"
            max={duration}
            value={currentTime}
            step="1"
            onChange={(e) => onSeek(parseFloat(e.target.value))}
            aria-label="Progress Slider"
          />
        </div>
      </div>
      <div className="progress-timers">
        <span className="start-time">{formatTime(currentTime)}</span>
        <span className="end-time">{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;