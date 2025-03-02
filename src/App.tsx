import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative py-6">
      <Header />
      <main className="absolute top-0 left-0">
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;
