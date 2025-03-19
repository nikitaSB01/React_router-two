import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function NewPostPage() {
  const navigate = useNavigate();

  const handleSave = async (content: string) => {
    try {
      await fetch("https://react-router-two-bac.onrender.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: 0, content }),
      });
      navigate("/");
    } catch (error) {
      console.error("Ошибка при создании поста:", error);
    }
  };

  return (
    <div>
      <h2>Создание поста</h2>
      <PostForm onSave={handleSave} />
    </div>
  );
}
