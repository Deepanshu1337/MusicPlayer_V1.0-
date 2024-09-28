import MainPage from "./pages/MainPage";
import PlaylistPage from "./pages/PlaylistPage";
import SearchPage from './pages/SearchPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="relative  w-[300px] h-[500px] bg-gray-800 rounded-2xl shadow-lg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
