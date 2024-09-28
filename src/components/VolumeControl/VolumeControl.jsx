import React from 'react';
import './VolumeControl.css';

const VolumeControl = ({ volume, onVolumeChange }) => {
  return (
    <div className="volume-control">
      <input
        type="range"
        className="volume-slider"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
        aria-label="Volume Slider"
      />
    </div>
  );
};

export default VolumeControl;