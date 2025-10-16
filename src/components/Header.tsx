import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Services', id: 'services' },
  { name: 'About', id: 'about' },
  // { name: 'Blog', id: 'blog' },
  { name: 'Contact', id: 'contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer flex items-center min-w-0"
            onClick={() => scrollToSection('home')}
          >
            <img
              src="/Ikigai logo.png"
              alt="Ikigai Soul Wellness Logo"
              className="h-10 w-10 mr-2 flex-shrink-0"
            />
            <img
              src="/Ikigai logo name.png"
              alt="Ikigai Soul Wellness"
              className="h-8 w-auto max-w-[120px] sm:max-w-[180px] md:max-w-none object-contain"
              style={{ minWidth: 0 }}
            />
            {/* <h1 className="text-2xl font-semibold text-primary"><span className="text-[#8C4AA4] text-3xl font-['Great_Vibes']">Ikigai </span > Soul Wellness</h1> */}
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </motion.button>
            ))}
            <Button
              onClick={() => navigate('/form')}
              className="bg-[#9d33c4] text-white hover:bg-[#9d33c4]/75"
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t border-border pt-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </motion.button>
              ))}
              <Button
                onClick={() => navigate('/form')}
                className="bg-primary hover:bg-primary/90 w-fit"
              >
                Book Now
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}