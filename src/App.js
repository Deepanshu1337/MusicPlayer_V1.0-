import MainPage from "./pages/MainPage";
import PlaylistPage from "./pages/PlaylistPage";
import SearchPage from './pages/SearchPage'
import Navbar from './components/navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar />
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
