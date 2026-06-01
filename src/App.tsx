import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import ITBerries from './sections/ITBerries';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <ITBerries />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
