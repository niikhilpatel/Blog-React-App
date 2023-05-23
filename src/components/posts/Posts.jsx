import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://www.color-meanings.com/wp-content/uploads/dirt-flying-1536x1025.jpeg" />
      <Post img="https://www.color-meanings.com/wp-content/uploads/dead-brown-leaves-1536x1018.jpeg" />
      <Post img="https://www.color-meanings.com/wp-content/uploads/brown-acorns-on-the-ground-1536x989.jpeg"/>
      <Post img="https://www.color-meanings.com/wp-content/uploads/bull-elk-1536x1207.jpeg"/>
      <Post img="https://www.color-meanings.com/wp-content/uploads/tawny-owls-1536x1024.jpeg"/>
      <Post img="https://www.color-meanings.com/wp-content/uploads/dog-footprint-in-mud-1536x1024.jpeg"/>
    </div>
  );
}