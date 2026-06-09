import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'ACED', path: '/aced' },
    { name: 'Learning', path: '/learning' },
    { name: 'Community', path: '/community' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
          : isHomePage ? 'bg-transparent py-5' : 'bg-blue-900 py-3 shadow-md'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group transition-transform hover:scale-105">
            <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center p-1.5 border-2 border-yellow-400 shadow-lg group-hover:rotate-6 transition-transform">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                <circle cx="35" cy="40" r="10" />
                <path d="M35 55c-8 0-15 5-15 12v10h30V67c0-7-7-12-15-12z" />
                <circle cx="65" cy="30" r="12" />
                <path d="M65 48c-10 0-18 6-18 15v15h36V63c0-9-8-15-18-15z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-black text-2xl leading-none tracking-tighter",
                isScrolled ? "text-blue-900" : "text-white"
              )}>MOUNT RIDLEY</span>
              <span className={cn(
                "text-xs font-bold tracking-[0.2em] uppercase",
                isScrolled ? "text-yellow-600" : "text-yellow-400"
              )}>P-12 College</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-[15px] font-bold transition-all duration-300 relative py-2',
                  location.pathname === link.path
                    ? 'text-yellow-400 scale-110'
                    : isScrolled ? 'text-slate-700 hover:text-blue-900' : 'text-white/90 hover:text-white'
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 rounded-full"
                  />
                )}
              </Link>
            ))}
            <a
              href="https://mountridleycollege-vic.compass.education/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-yellow-400 text-blue-900 px-6 py-2.5 rounded-xl font-black text-sm hover:bg-white hover:scale-105 transition-all shadow-md active:scale-95"
            >
              <LogIn size={18} />
              <span>COMPASS</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'p-2 rounded-md',
                isScrolled ? 'text-blue-900' : 'text-white'
              )}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full top-full left-0 border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  location.pathname === link.path
                    ? 'text-yellow-500 bg-blue-50'
                    : 'text-gray-700 hover:text-yellow-500 hover:bg-gray-50'
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://mountridleycollege-vic.compass.education/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-3 text-base font-bold text-blue-900 bg-yellow-400 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <LogIn size={18} />
              <span>Compass Login</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
