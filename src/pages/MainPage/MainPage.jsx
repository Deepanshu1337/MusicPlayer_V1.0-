import { Link } from "react-router-dom";
import "./MainPage.css";
import songImg from "../../assests/legacy.jpg";
import { useState } from "react";
const MainPage = () => {
 
    const [value, setValue] = useState(0); // Slider's current value
  
    // Handler to update value and background gradient
    const handleInputChange = (e) => {
      const newValue = e.target.value;
      setValue(newValue);
    };
  return (
    <>
      <div className="Main-container h-[100vh] bg-gradient-to-b from-stone-800 to-slate-900 text-white ">
        {/* header-songname, artist-name, search and playlist button */}
        <div className="flex justify-between items-start p-4  ">
            <div className="pl-5">
              <h1 className="font-semibold text-2xl">Song Name</h1>
              <h3 className="font-semibold text-base text-gray-400">Artist</h3>
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
        {/* -------------------------------------------------------- */}

        {/*Track image container */}
        <div className="margin-bottom1 song-image-container ">
          <img
            src={songImg}
            alt="Song image"
            className="my-8 mx-auto h-[300px] "
          />
        </div>
        {/* ---------------------------------------------------------- */}

        {/* Mini- controls Volume and add to playlist button  */}
        <div className="margin-bottom1 mini-control-container flex justify-around px-4 mb-6">
          <div className="flex gap-4">
            <i className="playingControlsBtns bx bx-volume-low text-3xl"></i>
            <i className="playingControlsBtns bx bx-volume-full text-3xl"></i>
          </div>

          <i className="playingControlsBtns bx bx-add-to-queue text-3xl"></i>
        </div>
        {/* -------------------------------------------------------- */}

        {/* controls- play/pause next previous */}
        <div className="playingControls flex justify-center items-center mt-6 text-4xl ">
          <i className="playingControlsBtns bx bx-skip-previous"></i>
          <div>
            <i className="playingControlsBtns bx bx-play-circle"></i>
            <i className="playingControlsBtns bx bx-pause-circle hidden"></i>
          </div>
          <i className="playingControlsBtns bx bx-skip-next"></i>
        </div>
        {/* ----------------------------------------------- */}

        {/* track duration and seeker */}
        <div className="seeker-container">
          <div className="flex-container">
            <p>0:00</p>
            <div className="range-wrapper">
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleInputChange} // Update the value and gradient on change
                className="range-input" // Apply the class for CSS styling
                style={{
                  background: `linear-gradient(to right, black ${value}%, #e5e7eb ${value}%)`, // Dynamic background
                }}
              />
            </div>
            <p>3:20</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
