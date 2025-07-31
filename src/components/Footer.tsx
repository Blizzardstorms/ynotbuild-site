const socials = [
  { name: 'LinkedIn', href: '#', icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.57 1.99 3.57 4.58v5.6z"/></svg>
  )},
  { name: 'Twitter', href: '#', icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M24 4.56c-.89.39-1.85.65-2.86.77a4.93 4.93 0 0 0 2.16-2.72 9.86 9.86 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.39 4.48A13.97 13.97 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.62v.06a4.93 4.93 0 0 0 3.95 4.83c-.43.12-.88.18-1.35.18-.33 0-.64-.03-.95-.09a4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 21.54a13.94 13.94 0 0 0 7.56 2.22c9.05 0 14-7.5 14-14v-.64A10.08 10.08 0 0 0 24 4.56z"/></svg>
  )},
  { name: 'Facebook', href: '#', icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.124v-3.622h3.124v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24h-1.918c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.35c0-.734-.592-1.326-1.325-1.326z"/></svg>
  )},
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#18181b] py-8 px-4 flex flex-col md:flex-row items-center justify-between border-t border-orange mt-8">
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <span className="text-orange font-bold text-lg tracking-wide">Y-NOT Build</span>
        <span className="text-text text-xs ml-2">&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
      <div className="flex gap-6">
        {socials.map(s => (
          <a key={s.name} href={s.href} className="text-orange hover:text-text transition-colors" aria-label={s.name}>
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
