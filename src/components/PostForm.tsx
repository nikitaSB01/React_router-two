import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  onSave: (content: string) => void;
  initialContent?: string;
  isEdit?: boolean;
}

export default function PostForm({
  onSave,
  initialContent = "",
  isEdit = false,
}: Props) {
  const [content, setContent] = useState(initialContent);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    onSave(content);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={5}
        placeholder="Введите текст поста"
        style={{ padding: "10px" }}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        <button type="submit">{isEdit ? "Сохранить" : "Опубликовать"}</button>
        <button type="button" onClick={() => navigate("/")}>
          ×
        </button>
      </div>
    </form>
  );
}
