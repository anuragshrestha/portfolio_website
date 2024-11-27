import "./App.css";
import Experience from "./experience/Experience";
import Headers from "./headers/Headers";
import Introduction from "./introduction/Introduction";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

function App() {
  return (
    <div className="App">
      <div id="headers">
        <Headers />
      </div>
      <div id="about" style={{ height: "100vh", background: "lightblue" }}>
        <Introduction />
      </div>
      <div id="skills" style={{ height: "100vh", background: "lightblue" }}>
        <Skills />
      </div>
      <div id="experience" style={{ height: "100vh", background: "lightblue" }}>
        <Experience/>
      </div>
      <div id="projects" style={{ height: "100vh", background: "lightblue" }}>
        <Projects/>
      </div>
   <div className="footer">
  <p>@ All copy right reserved by Anurag Shrestha</p>
   </div>
    </div>
  );
}

export default App;
