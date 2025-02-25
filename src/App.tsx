import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="relative py-6">
      <Header />
      <main className="px-4 py-8">
        <About />
      </main>
    </div>
  );
}

export default App;
