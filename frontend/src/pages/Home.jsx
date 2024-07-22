import { Banner } from "../components/banner/Banner";
import { Skills } from "../components/skills/Skills";
import { Projects } from "../components/projects/Projects";

function Home() {
  return (
    <div>
      <Banner />
      <Skills />

      {/* Projects is WIP */}
      {/* <Projects /> */}
    </div>
  );
}

export default Home;
