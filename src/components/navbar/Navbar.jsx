import React from "react";
import Logo from "../../assests/D-music_logo (1).png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isPlaylist = location.pathname === "/playlist";
  const isSearch = location.pathname === "/search";

  return (
    <div className="bg-[linear-gradient(180deg,_#1c1c1c,_#1c1b1b_42.69%,_#161616)] sticky h-14 text-white shadow-lg flex justify-between p-2 items-center">
      <div
        className={`arrow-and-search-box flex items-center justify-start gap-3 w-full ${
          isSearch ? "" : "hidden"
        }  `}
      >
        <Link to="/">
          <i
            className={`${
              isPlaylist || isSearch
                ? "arrow bx bx-chevron-left text-2xl ml-2"
                : "hidden"
            }`}
          ></i>
        </Link>
        <input
          className={`${
            isSearch
              ? "search-input-box rounded-3xl bg-gray-300 w-[70%] py-1 px-3 text-black outline-none border border-black placeholder:text-gray-600 caret-black"
              : "hidden"
          }`}
          type="text"
          placeholder="Search Songs"
        />
      </div>

      {/* logo */}
      <div>
        <Link to="/">
          <img
            className={`${
              isSearch ? "hidden" : "h-10 w-20 text-white"
            }`}
            src={Logo}
            alt="D-music"
          />
        </Link>
      </div>

      {/* search icon and playlist icon */}
      <div className="w-1/3 flex justify-end gap-5">
        <Link to="/search">
          <i
            className={`bx bx-search-alt-2 text-2xl  ${
              isPlaylist || isSearch ? "hidden" : ""
            }`}
          ></i>
        </Link>
        {isPlaylist ? (
          <Link to="/">
            <i className="arrow bx bx-chevron-left text-2xl ml-2"></i>
          </Link>
        ) : (
          <Link to="/playlist">
            <i className="bx bxs-playlist text-2xl"></i>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
