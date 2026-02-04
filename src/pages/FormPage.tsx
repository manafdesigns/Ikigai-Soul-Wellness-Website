import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export default function FormPage() {


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground flex items-center justify-center py-12 px-4"
    >
      <SEO
        title="Book a Session"
        description="Book your healing session with Ikigai Soul Wellness. Fill out our intake form to get started on your wellness journey."
        url="https://ikigaisoulwellness.com.au/form"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-card text-card-foreground p-8 rounded-xl shadow-2xl w-full max-w-4xl border" // Increased max-width
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl mb-8 font-bold text-center bg-gradient-to-r from-[#9674c8] to-[#9b04d2] bg-clip-text text-transparent"
        >
          Book Your Session
        </motion.h2>

        <div className="space-y-6">
          <div className="w-full overflow-hidden rounded-lg">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScZwDexclGVLfUvnz_7YL35_y5LT2J_4jRi8YnHa22UMKCHrw/viewform?embedded=true"
              width="100%"
              height="800" // Reduced height to fit better
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              className="w-full"
              title="Booking Form"
            >
              Loading…
            </iframe>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center text-muted-foreground mt-6 text-sm"
        >
          We'll get back to you within 24 hours
        </motion.p>
      </motion.div>
    </motion.div>
  );
}