import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Credentials from './components/Credentials';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <Hero />
      <Metrics />
      <Profile />
      <Skills />
      <Experience />
      <Projects />
      <Credentials />
      <Contact />
    </div>
  );
}
