import { useEffect } from 'react';
import { motion } from 'motion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import FormPage from './pages/FormPage';
import { ExpandableSocialButton } from './components/expandable-social-button';
import { WhyChooseUs } from './components/WhyChooseUs';

// Create a separate component for the main content that uses useNavigate
function MainContent() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

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
      <ExpandableSocialButton />
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