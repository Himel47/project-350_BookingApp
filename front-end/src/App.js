import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutPage/AboutPage";
import GalleryPage from "./pages/galleryPage/GalleryPage";
import Home from "./pages/home/Home";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
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
        <Route path="/searchlist" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
