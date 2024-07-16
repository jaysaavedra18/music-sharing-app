import RenderComponents from "../components/RenderComponents";
import Posts from "../components/posts/Posts";

function Home() {
  // We will create a post and relative comments section for each Post entity in our database
  return (
    <div>
      <RenderComponents />

      <Posts />
    </div>
  );
}

export default Home;
