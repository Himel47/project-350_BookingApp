import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutPage/AboutPage";
import GalleryPage from "./pages/galleryPage/GalleryPage";
import Home from "./pages/home/Home";
import RoomPage from "./pages/roomPage/RoomPage";
import SearchPage from "./pages/searchPage/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/list" element={<SearchPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
