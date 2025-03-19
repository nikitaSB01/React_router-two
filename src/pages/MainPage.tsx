import PostList from "../components/PostList";

export default function MainPage() {
  return (
    <div className="container">
      <div>
        <h2>Список постов</h2>
        <PostList />
      </div>
    </div>
  );
}
