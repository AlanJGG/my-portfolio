import { Navbar } from "./components";
import { Home, About, Work, Blog, Contact } from "./views";

function App() {
  return (
    <div id="app">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
