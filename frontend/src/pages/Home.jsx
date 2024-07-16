import Comments from "../comments/Comments";
import { useEffect } from "react";
import { Spotify } from "react-spotify-embed";
import { getPosts as getPostsApi } from "../comments/comments-api";
import { useState } from "react";
import LightDarkMode from "../components/light-dark-mode";

function Home() {
  // gather current user id
  const currentUserId = parseInt(localStorage.getItem("currentUserId"));
  // define states for posts
  const [posts, setPosts] = useState([]);
  // fetch posts from api
  useEffect(() => {
    getPostsApi().then((data) => {
      console.log("posts-data", data);
      setPosts(data);
    });
  }, []);

  posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // We will create a post and relative comments section for each Post entity in our database
  return (
    <div>
      <LightDarkMode />

      {posts.map((post, index) => (
        <div className="post-container" key={index}>
          <br />
          <Spotify wide link={post.link} />
          <Comments currentUserId={currentUserId} postId={post.id} />
        </div>
      ))}
    </div>
  );
}

export default Home;
