const services = [
  {
    title: 'General Contracting',
    desc: 'Full-service project management and execution for commercial, residential, and industrial builds.'
  },
  {
    title: 'Design & Build',
    desc: 'Integrated design and construction for seamless, cost-effective project delivery.'
  },
  {
    title: 'Renovations',
    desc: 'Modernization and upgrades for existing spaces, from offices to homes.'
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-primary py-14 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-orange mb-8">Our Services</h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full justify-center">
        {services.map((service, idx) => (
          <div key={service.title} className="flex-1 bg-[#18181b] rounded-xl shadow-lg p-6 border-t-4 border-orange min-w-[260px]">
            <h3 className="text-xl font-semibold text-orange mb-2">{service.title}</h3>
            <p className="text-text text-base">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
