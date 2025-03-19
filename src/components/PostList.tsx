import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Post {
  id: number;
  content: string;
  created: number;
}

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://react-router-two-bac.onrender.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Ошибка при получении постов:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container">
      <button onClick={() => navigate("/posts/new")}>Создать пост</button>
      {posts.map((post) => (
        <div
          key={post.id}
          className="post"
          onClick={() => navigate(`/posts/${post.id}`)}
          style={{
            cursor: "pointer",
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
