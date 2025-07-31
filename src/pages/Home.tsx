import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
