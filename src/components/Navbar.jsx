import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 glassmorphism border-b border-white/5 shadow-glass' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-accentSky to-accentViolet bg-clip-text text-transparent"
        >
          KY
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                activeSection === item.id 
                  ? 'text-accentSky' 
                  : 'text-[#94a3b8] hover:text-lightText'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accentSky rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Resume Button */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download="Khushi_Yadav_Resume.pdf"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-accentSky/10 border border-accentSky/30 text-accentSky text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-accentSky hover:text-[#0f172a] hover:border-accentSky"
          >
            Resume
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburguer Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-lightText focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full glassmorphism border-b border-white/5 shadow-glass">
          <div className="px-6 py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-base font-semibold transition-colors duration-300 py-1 ${
                  activeSection === item.id 
                    ? 'text-accentSky border-l-2 border-accentSky pl-3' 
                    : 'text-[#94a3b8] hover:text-lightText pl-3 border-l-2 border-transparent'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/5">
              <a
                href="/resume.pdf"
                download="Khushi_Yadav_Resume.pdf"
                className="flex items-center justify-center gap-1.5 w-full py-3 rounded-full bg-accentSky text-[#0f172a] text-sm font-bold tracking-wider hover:bg-accentSky/80 transition-colors"
              >
                Download Resume
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
