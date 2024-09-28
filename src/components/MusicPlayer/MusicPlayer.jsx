import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';
import SongInfo from '../SongInfo';
import Controls from '../Controls';
import ProgressBar from '../ProgressBar';
import VolumeControl from '../VolumeControl';
import Playlist from '../Playlist';
import SearchBar from '../SearchBar';

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState({
    title: 'Song Title',
    artist: 'Artist Name',
    album: 'Album Name',
    image: './assets/kyle-wong-rrHtkX1rLP0-unsplash.jpg',
    audio: './path-to-audio-file.mp3',
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const [playlist, setPlaylist] = useState([
    { title: 'Song 1', artist: 'Artist 1', album: 'Album 1', image: './assets/image1.jpg', audio: './song1.mp3' },
    { title: 'Song 2', artist: 'Artist 2', album: 'Album 2', image: './assets/image2.jpg', audio: './song2.mp3' },
    // Add more songs here
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = currentSong.audio;
      audio.volume = volume;
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('ended', handleSongEnd);
    }
    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('ended', handleSongEnd);
      }
    };
  }, [currentSong, volume]);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSongEnd = () => {
    skipNext();
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipPrevious = () => {
    let newIndex = currentSongIndex - 1;
    if (newIndex < 0) {
      newIndex = playlist.length - 1;
    }
    setCurrentSongIndex(newIndex);
    setCurrentSong(playlist[newIndex]);
  };

  const skipNext = () => {
    let newIndex = currentSongIndex + 1;
    if (newIndex >= playlist.length) {
      newIndex = 0;
    }
    setCurrentSongIndex(newIndex);
    setCurrentSong(playlist[newIndex]);
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleSeek = (seekTime) => {
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const addToPlaylist = (song) => {
    setPlaylist([...playlist, song]);
  };

  return (
    <div className="main-container">
         <SearchBar onAddToPlaylist={addToPlaylist} />
         <br/>
      <SongInfo currentSong={currentSong} />
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
      />
      <Controls
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        onSkipPrevious={skipPrevious}
        onSkipNext={skipNext}
      />
      {/* <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} /> */}
      {/* <Playlist playlist={playlist} currentSongIndex={currentSongIndex} /> */}
     
      <audio ref={audioRef} />
    </div>
  );
};

export default MusicPlayer;