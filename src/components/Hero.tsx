import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center lg:justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/Ikigi front Wallpaper.png"
          alt="Wellness Center"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/45" /> */}
      </div>

      {/* Content - Center on mobile, left on desktop */}
      <div className="relative z-10 text-white max-w-2xl mx-4 lg:mx-16 xl:mx-24 px-4 text-center lg:text-left">
         {/* Pink Blinking Star */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 1, 0.3],
          scale: [1, 1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute top-1/2 right-1/4 z-10"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500 ">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl mb-6"
        >
          Welcome to
          <span className="block font-['Great_Vibes'] text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r text-[#9d33c4] bg-clip-text  pb-2.5 md:pb-1 mt-1">
            Ikigai
          </span>
          <span className='text-3xl md:text-4xl text-[#42374b] block'>SOUL WELLNESS</span> 
        </motion.h1>
         {/* Pink Blinking Star */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute top-1/6  z-10"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </motion.div>
      {/* Pink Blinking Star */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute -bottom-1/6  z-10"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-[#440865] md:text-xl lg:text-2xl mb-8 leading-relaxed"
        >
          Your journey to wellness begins here. Discover inner peace, restore balance, 
          and embrace a healthier lifestyle with our comprehensive wellness services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('services')}
            className="bg-[#9d33c4] text-white hover:bg-[#9d33c4]/75 hover:text-black px-8 py-6 text-lg"
          >
            Explore Services
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="bg-[#9d33c48c] text-white border-[#9d33c489] hover:bg-pink-600 lg:bg-transparent lg:text-[#42374b] lg:border-[#42374b] hover:lg:text-white hover:lg:bg-[#9d33c4] px-4 py-6 text-lg"
          >
            Book a free 30 min discovery session
          </Button>
        </motion.div>
      </div>

      {/* Floating Animation Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-10 w-2 h-2 bg-white rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/3 right-20 w-3 h-3 bg-yellow-500 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -25, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-yellow-500  rounded-full"
      />

      {/* Pink Blinking Star */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute top-1/2 right-1/4 z-10 sm:block hidden"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}