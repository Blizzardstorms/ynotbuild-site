export default function Contact() {
  return (
    <section id="contact" className="w-full bg-primary py-14 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-orange mb-4">Contact Us</h2>
      <form className="w-full max-w-lg flex flex-col gap-4 bg-[#18181b] rounded-xl p-6 shadow-lg">
        <input type="text" name="name" placeholder="Your Name" className="bg-primary border border-orange rounded px-4 py-2 text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange" required />
        <input type="email" name="email" placeholder="Your Email" className="bg-primary border border-orange rounded px-4 py-2 text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange" required />
        <textarea name="message" placeholder="Your Message" rows={4} className="bg-primary border border-orange rounded px-4 py-2 text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange" required />
        <button type="submit" className="bg-orange text-primary font-semibold px-6 py-2 rounded hover:bg-opacity-90 transition-all">Send Message</button>
      </form>
      <p className="text-text text-sm mt-4 opacity-70">Or email us at <a href="mailto:info@ynotbuild.com" className="text-orange underline">info@ynotbuild.com</a></p>
    </section>
  );
}
