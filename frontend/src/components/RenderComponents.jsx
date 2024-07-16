import ScrollIndicator from "./scroll-indicator/index.jsx";
import DarkMode from "./dark-mode/index.jsx";

function RenderComponents() {
  // We will create a post and relative comments section for each Post entity in our database
  return (
    <div>
      <ScrollIndicator title={"We're All Listening..."} />
      <br />
      <br />
      <DarkMode />
      <br />
    </div>
  );
}
export default RenderComponents;
