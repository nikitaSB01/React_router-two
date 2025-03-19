import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NewPostPage from "./pages/NewPostPage";
import ViewPostPage from "./pages/ViewPostPage";
import EditPostPage from "./pages/EditPostPage";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/posts/new" element={<NewPostPage />} />
      <Route path="/posts/:id" element={<ViewPostPage />} />
      <Route path="/posts/:id/edit" element={<EditPostPage />} />
    </Routes>
  );
}
