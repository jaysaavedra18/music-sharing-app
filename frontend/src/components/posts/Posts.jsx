import { Spotify } from "react-spotify-embed";
import Comments from "../comments/Comments";
import { useEffect, useState } from "react";
import CommentForm from "../comments/CommentForm";
import {
  getPosts as getPostsApi,
  createPost as createPostApi,
} from "./posts-api";
import "./Posts.css";

function Posts() {
  const [backendPosts, setBackendPosts] = useState([]);

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

  function isSpotifySongLink(url) {
    // Define regex pattern and test url against it
    const regexPattern =
      /^(https:\/\/open\.spotify\.com\/track\/[a-zA-Z0-9]+)|(spotify:track:[a-zA-Z0-9]+)$/;
    return regexPattern.test(url);
  }

  // debugging tools
  const testUrls = [];
  testUrls.forEach((url) => {
    console.log(`Is "${url}" a Spotify song link?`, isSpotifySongLink(url));
  });

  const addPost = (text) => {
    if (!isSpotifySongLink(text)) {
      alert("Error: ensure that your music link is of Spotify");
      return;
    }
    console.log("Shared link: ", text);
    createPostApi(text).then((post) => {
      console.log(post);
      setBackendPosts([post, ...backendPosts]);
    });
  };

  posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <div className="posts-container">
        <h3 className="post-title">Share a Song</h3>
        <CommentForm submitLabel={"Share"} handleSubmit={addPost} />
      </div>

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

export default Posts;
