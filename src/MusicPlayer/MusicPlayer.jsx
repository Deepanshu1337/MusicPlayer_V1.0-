import React, { useState, useRef, useEffect } from "react";
import SongInfo from "../components/SongInfo";
import Controls from "../components/Controls";
import ProgressBar from "../components/ProgressBar";
import SearchBar from "../components/SearchBar";
import song1Img from "../assests/O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg";
import song1 from "../assests/O Mahi.mp3";
import song2 from "../assests/legacy.mp3";
import song2Img from "../assests/download.jpg";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  //   {
  //   title: "",
  //   artist: "",
  //   album: "",
  //   image: "",
  //   audio: ".",
  // });
  const [playlist, setPlaylist] = useState([
    {
      title: "O maahi ",
      artist: "Pritam",
      album: "Dunki",
      image: song1Img,
      audio: song1,
    },
    {
      title: "Legacy",
      artist: "Munawar Farukhi",
      album: "MN Farukhi",
      image: song2Img,
      audio: song2,
    },
  ]);
  const [currentSong, setCurrentSong] = useState(playlist[1]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  console.log(currentSong);
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = currentSong.audio;
      audio.volume = volume;
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("ended", handleSongEnd);
    }
    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("ended", handleSongEnd);
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
    <div className="flex flex-col w-full h-full rounded-xl overflow-hidden">
      <div className="h-[75%] ">
        <SearchBar onAddToPlaylist={addToPlaylist} />
        <SongInfo currentSong={currentSong} />
      </div>

     <div className="bg-black pt-8 rounded-b-xl">
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
     </div>

      <audio ref={audioRef} />
    </div>
  );
};

export default MusicPlayer;
