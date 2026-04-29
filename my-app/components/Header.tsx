'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white font-serif text-xl">
            台
          </div>
          <span className={`text-lg font-bold tracking-[0.2em] uppercase ${
            isScrolled ? 'text-black' : 'text-white'
          }`}>
            Taiwan
          </span>
        </div>

      
        <nav className="hidden md:flex gap-8">
          {['Servicios', 'Reserva', 'Ubicación'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-colors hover:text-red-600 ${
                isScrolled ? 'text-gray-600' : 'text-gray-300'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

       
        <a 
          href="#booking" 
          className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-all duration-300 ${
            isScrolled 
              ? 'border-black text-black hover:bg-black hover:text-white' 
              : 'border-white/30 text-white hover:bg-white hover:text-black'
          }`}
        >
          Turno
        </a>
      </div>
    </header>
  );
}