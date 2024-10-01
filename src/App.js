import PlayerContextProvider from "./context/PlayerContextProvider";
import MainPage from "./pages/MainPage";
import PlaylistPage from "./pages/PlaylistPage";
import SearchPage from './pages/SearchPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <PlayerContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      </BrowserRouter>
      </PlayerContextProvider>
    </div>
  );
}

export default App;
