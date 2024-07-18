import ScrollIndicator from "./scroll-indicator/index.jsx";
import DarkMode from "./dark-mode/index.jsx";
import Posts from "./posts/Posts.jsx";
import { Navbar } from "./navbar/Navbar.jsx";

function RenderComponents() {
  // We will create a post and relative comments section for each Post entity in our database
  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <Posts />
      </div>
    </div>
  );
}
export default RenderComponents;
