import { useEffect } from 'react';
import { motion } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import FormPage from './pages/FormPage';

// Create a separate component for the main content that uses useNavigate
function MainContent() {
  const navigate = useNavigate();
  
  return (
    <>
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />
        
        {/* Services Section */}
        <Services />
        
        {/* About Section */}
        <About />
        
        {/* Blog Section */}
        <Blog />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Action Button - Book Now */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            boxShadow: [
  '0 0 20px rgba(155, 4, 210, 0.3)',
  '0 0 30px rgba(155, 4, 210, 0.5)',
  '0 0 20px rgba(155, 4, 210, 0.3)'
]
          }}
          transition={{ 
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          onClick={() => navigate('/form')}
          className="bg-gradient-to-r from-[#9674c8] to-[#9b04d2] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-2"
        >
          <span className="hidden sm:inline">Book Now</span>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </motion.button>
      </motion.div>
    </>
  );
}

export default function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  
  return (
    <Router>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background text-foreground w-full relative overflow-x-hidden"
      >
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </motion.div>
    </Router>
  );
}