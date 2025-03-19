import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NewPostPage from "./pages/NewPostPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/posts/new" element={<NewPostPage />} />
    </Routes>
  );
}
