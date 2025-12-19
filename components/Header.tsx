
import React, { useState, useEffect } from 'react';
import { HardHat, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Acasă', href: '#acasa' },
    { label: 'Despre Noi', href: '#despre' },
    { label: 'Servicii', href: '#servicii' },
    { label: 'Colaboratori', href: '#colaboratori' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center text-white shadow-lg group-hover:bg-amber-500 transition-colors">
            <HardHat size={20} strokeWidth={2} />
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors ${
            isScrolled ? 'text-slate-900' : 'text-white md:text-white sm:text-slate-900'
          } group-hover:text-amber-500`}>
            TITICONST
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className={`transition-colors hover:text-amber-500 ${
                isScrolled ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-md active:scale-95"
          >
            Cere Ofertă
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-lg font-medium text-slate-900 hover:text-amber-500 transition-colors py-2 border-b border-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mt-4 inline-flex items-center justify-center h-12 text-base font-bold text-white bg-amber-500 rounded-xl hover:bg-amber-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cere Ofertă
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
