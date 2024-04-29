import './app.scss';
import Parallax from './components/Parallax/Parallax';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='About'><Parallax type="about"/></section>
      <section><About /></section>
      <section id='Portfolio'><Parallax type="portofolio"/></section>
      <Portfolio />
      <section id='Contact Me'><Contact /></section>
    </div>
  );
}

export default App
