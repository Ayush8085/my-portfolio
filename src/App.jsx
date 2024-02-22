import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header />

      <main className="max-w-7xl mx-auto">
        {/* INTRO */}
        <Intro />

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        {/* PROJECTS */}
        <Projects />

        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        {/* CONTACT */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
