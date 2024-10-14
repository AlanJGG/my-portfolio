import { Navbar, SectionHR, Footer } from "./components";
import { Home, About, Projects, Blog, Contact } from "./views";

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Home />
      <SectionHR />
      <About />
      <SectionHR />
      <Projects />
      <SectionHR />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
