import RenderComponents from "../components/RenderComponents";

function Home() {
  // We will create a post and relative comments section for each Post entity in our database
  return (
    <div style={{ padding: "20px" }}>
      <RenderComponents />
    </div>
  );
}

export default Home;
