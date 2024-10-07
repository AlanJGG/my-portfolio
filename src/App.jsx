import { Navbar } from "./components";
import { Home, About, Projects, Blog, Contact } from "./views";

function App() {
  return (
    <div id="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
