import React, { useState, useContext, useRef, useEffect } from 'react';
import './MusicPlayer.css';
import PlayerContext from '../../../context/PlayerContext';
import { Link } from 'react-router-dom';

const MusicPlayer = () => {
    const [value, setValue] = useState(0);
    const { currentTrack, setPlayList, playList } = useContext(PlayerContext);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Playlist handling function
    const addToPlayList = () => {
        const isAlreadyInPlayList = playList.some((track) => track.id === currentTrack.id);
        if (!isAlreadyInPlayList) {
            const newPlayList = [...playList, currentTrack];
            setPlayList(newPlayList);
        } else {
            alert("Track is already in your playlist");
        }
    };

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        // Seek to new position
        if (audioRef.current) {
            const duration = audioRef.current.duration;
            audioRef.current.currentTime = (newValue / 100) * duration;
        }
    };

    // Function to handle play/pause
    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch((error) => {
                console.error("Error trying to play the audio:", error);
            });
        }
        setIsPlaying(!isPlaying);
    };

    // Sync progress bar with audio
    const handleTimeUpdate = () => {
        const current = audioRef.current.currentTime;
        const duration = audioRef.current.duration;

        // Avoid division by zero
        if (duration > 0) {
            setValue((current / duration) * 100);
        }
    };

    // Format time to MM:SS
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // Automatically load the new track but don't play it yet
    useEffect(() => {
        if (currentTrack) {
            audioRef.current.load(); // Load the new track
            setValue(0); // Reset the seek bar when a new track loads
            setIsPlaying(false); // Reset playing state
        }
    }, [currentTrack]);

    return (
        <div className="Main-container h-[100vh] bg-gradient-to-b from-stone-800 to-slate-900 text-white">
            <audio
                ref={audioRef}
                src={currentTrack?.song} // Assuming currentTrack has an audioSrc
                onTimeUpdate={handleTimeUpdate} // Sync with progress bar
                onLoadedMetadata={() => {
                    setValue(0); // Reset to 0 when track is loaded
                }}
            />

            {/* header-songname, artist-name, search and playlist button */}
            <div className="flex justify-between items-start p-4">
                <div className="pl-5">
                    <h1 className="font-semibold text-2xl">{currentTrack?.title}</h1>
                    <h3 className="font-semibold text-base text-gray-400">{currentTrack?.artist}</h3>
                </div>
                <div className="flex gap-4 text-3xl">
                    <Link to="/search">
                        <i className="bx bx-search"></i>
                    </Link>
                    <Link to="/playlist">
                        <i className="bx bxs-playlist"></i>
                    </Link>
                </div>
            </div>

            {/* Track image container */}
            <div className="margin-bottom1 song-image-container">
                <img
                    src={currentTrack?.image}
                    alt="Song image"
                    className="my-8 mx-auto h-[300px]"
                />
            </div>

            {/* Mini- controls Volume and add to playlist button */}
            <div className="margin-bottom1 mini-control-container flex justify-around px-4 mb-6">
                <div className="flex gap-4">
                    <i className="playingControlsBtns bx bx-volume-low text-3xl"></i>
                    <i className="playingControlsBtns bx bx-volume-full text-3xl"></i>
                </div>
                <i className="playingControlsBtns bx bx-add-to-queue text-3xl" onClick={addToPlayList}></i>
            </div>

            {/* Controls- play/pause next previous */}
            <div className="playingControls flex justify-center items-center mt-6 text-4xl">
                <i className="playingControlsBtns bx bx-skip-previous"></i>
                <div>
                    {isPlaying ? (
                        <button onClick={togglePlayPause}>
                            <i className="playingControlsBtns bx bx-pause-circle"></i>
                        </button>
                    ) : (
                        <button onClick={togglePlayPause}>
                            <i className="playingControlsBtns bx bx-play-circle"></i>
                        </button>
                    )}
                </div>
                <i className="playingControlsBtns bx bx-skip-next"></i>
            </div>

            {/* Track duration and seeker */}
            <div className="seeker-container">
                <div className="flex-container">
                    <p>{formatTime(audioRef.current ? audioRef.current.currentTime : 0)}</p>
                    <div className="range-wrapper">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={isNaN(value) ? 0 : value} // Prevent NaN
                            onChange={handleInputChange}
                            className="range-input"
                            style={{
                                background: `linear-gradient(to right, black ${value}%, #e5e7eb ${value}%)`,
                            }}
                        />
                    </div>
                    <p>{formatTime(audioRef.current ? audioRef.current.duration : 0)}</p>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
