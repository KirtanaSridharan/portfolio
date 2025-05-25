import { useState, useEffect } from 'react';
import { FileText, Github, Linkedin, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          {personalInfo.name}
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-black transition-colors">About</a>
          <a href="#skills" className="text-gray-700 hover:text-black transition-colors">Skills</a>
          <a href="#projects" className="text-gray-700 hover:text-black transition-colors">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-black transition-colors">Contact</a>
          <div className="flex items-center space-x-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-800 transition-colors">
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
          <nav className="container mx-auto px-6 flex flex-col space-y-4">
            <a href="#about" className="py-2 text-gray-700 hover:text-black transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" className="py-2 text-gray-700 hover:text-black transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" className="py-2 text-gray-700 hover:text-black transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="py-2 text-gray-700 hover:text-black transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <div className="flex items-center space-x-4 py-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                <FileText size={16} />
                <span>Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
