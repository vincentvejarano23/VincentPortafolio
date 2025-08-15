
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  scrollTo: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The header will appear after scrolling down a bit (e.g., more than 100px)
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'ilustraciones', label: 'Ilustraciones' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'translate-y-0 bg-[#101411]/80 backdrop-blur-sm shadow-lg shadow-lime-500/10'
          : '-translate-y-full'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div 
          className="cursor-pointer" 
          onClick={() => scrollTo('hero')}
          data-interactive="true"
        >
          <Logo className="h-8 w-auto text-gray-200" />
        </div>
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className="text-gray-300 hover:text-lime-400 transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;