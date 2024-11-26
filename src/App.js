import "./App.css";
import Experience from "./experience/Experience";
import Headers from "./headers/Headers";
import Introduction from "./introduction/Introduction";
import Skills from "./skills/Skills";

function App() {
  return (
    <div className="App">
      <div id="headers">
        <Headers />
      </div>
      <div id="about">
        <Introduction />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience/>
      </div>
    </div>
  );
}

export default App;
