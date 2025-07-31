import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function NavBar() {
  return (
    <nav className="w-full bg-primary border-b border-orange sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Y-NOT Build Logo" className="h-10 w-10 object-contain" />
          <span className="text-orange font-bold text-xl tracking-wide">Y-NOT Build</span>
        </div>
        <ul className="hidden md:flex gap-8 text-text text-base font-medium">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-orange transition-colors duration-150">{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          {/* Mobile menu button placeholder (expandable in future) */}
          <svg className="h-7 w-7 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </div>
      </div>
    </nav>
  );
}
