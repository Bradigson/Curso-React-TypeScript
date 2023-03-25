
import Rutas from "./routes/Route";
import AboutMe from "./components/SectionOne";
import Skills from "./components/SectionTwo";
import MyObject from "./components/SectionThree";
import MyProyects from "./components/SectionFour";

function App() {
  console.log()
  return (
    <div className="">
      <AboutMe/>
      <Skills/>
      <MyObject/>
      <MyProyects/>
    </div>
  );
}

export default App;
