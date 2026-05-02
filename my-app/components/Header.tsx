'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Ubicación', href: '#info' },
    { name: 'Reservar', href: '#booking' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-serif text-xl">
            台
          </div>
          <span className="text-white text-lg font-bold tracking-[0.2em] uppercase">Taiwan</span>
        </div>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-red-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a 
          href="#booking" 
          className="border border-white/20 px-6 py-2 text-white text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all"
        >
          Turno
        </a>
      </div>
    </header>
  );
}