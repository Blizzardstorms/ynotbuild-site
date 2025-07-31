export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center py-16 px-4 bg-primary" id="hero">
      <h1 className="text-4xl md:text-6xl font-extrabold text-orange mb-4">If Not Y-NOT, Then Who?</h1>
      <p className="text-lg md:text-2xl text-text max-w-2xl mb-8">Empowering your vision with modern construction, innovation, and integrity. Build with the team that says YES when others say no.</p>
      <a href="#contact" className="inline-block bg-orange text-primary font-semibold px-8 py-3 rounded-full shadow hover:bg-opacity-90 transition-all text-lg">Get a Free Consultation</a>
    </section>
  );
}
