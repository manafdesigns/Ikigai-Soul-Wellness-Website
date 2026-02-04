import { useEffect } from 'react';
import { motion } from 'motion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { WeHelpWith } from './components/WeHelpWith';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import FormPage from './pages/FormPage';
import { ExpandableSocialButton } from './components/expandable-social-button';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Pricing } from './components/Pricing';
import { SEO } from './components/SEO';

// Create a separate component for the main content that uses useNavigate
function MainContent() {
  return (
    <>
      <SEO
        title="Ikigai Soul Wellness"
        description="Discover inner peace, restore balance, and embrace a healthier lifestyle with Ikigai Soul Wellness. Expert energy healing, reiki, and ayurveda in Canberra."
        url="https://ikigaisoulwellness.com.au"
      />
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* We Help With Section */}
        <WeHelpWith />

        {/* Services Section */}
        <Services />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* About Section */}
        <About />

        {/* Blog Section */}
        {/* <Blog /> */}

        {/* Pricing Section */}
        <Pricing />

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
    <HelmetProvider>
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
    </HelmetProvider>
  );
}