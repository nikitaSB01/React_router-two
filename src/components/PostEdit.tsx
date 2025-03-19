import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "./PostForm";

interface Post {
  id: number;
  content: string;
  created: number;
}

export default function PostEdit() {
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

  const handleSave = async (content: string) => {
    try {
      await fetch(`https://react-router-two-bac.onrender.com/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: Number(id), content }),
      });
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error("Ошибка при сохранении поста:", error);
    }
  };

  if (!post) return <p>Загрузка...</p>;

  return (
    <PostForm onSave={handleSave} initialContent={post.content} isEdit={true} />
  );
}
