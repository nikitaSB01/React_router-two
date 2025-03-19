import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Post {
  id: number;
  content: string;
  created: number;
}

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://react-router-two-bac.onrender.com/posts/${id}`
        );
        const data = await response.json();
        setPost(data.post);
      } catch (error) {
        console.error("Ошибка при загрузке поста:", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await fetch(`https://react-router-two-bac.onrender.com/posts/${id}`, {
        method: "DELETE",
      });
      navigate("/");
    } catch (error) {
      console.error("Ошибка при удалении поста:", error);
    }
  };

  const handleEdit = () => {
    navigate(`/posts/${id}/edit`);
  };

  if (!post) return <p>Загрузка...</p>;

  return (
    <div>
      <p>{post.content}</p>
      <button onClick={handleEdit}>Редактировать</button>
      <button onClick={handleDelete}>Удалить</button>
    </div>
  );
}
