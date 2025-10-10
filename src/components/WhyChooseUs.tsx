import { motion } from 'motion/react';

const reasons = [
  {
    title: "Personalized Care",
    description: " Every session is tailored to your unique needs, challenges, and goals.",
  },
  {
    title: "Safe & Sacred Space",
    description: "We provide a judgment-free, heart-centered environment where healing unfolds naturally.",
  },
  {
    title: "Authentic Wisdom",
    description: "All our offerings are rooted in time-tested traditions and modern holistic practices.",
  },
  {
    title: "Empowerment-Focused",
    description: "We don’t just heal — we teach you how to access your own inner strength and wisdom.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-[#f9f6fd]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl  pb-2.5 md:pb-2 font-bold text-center mb-12 bg-gradient-to-r from-[#9674c8] to-[#9b04d2] bg-clip-text text-transparent"
        >
          Why Choose Us
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center text-lg text-gray-600 mb-10"
        >At Ikigai Soul Wellness, every session is a sacred space for you to release, recharge, and realign with your authentic path. We create more than just sessions — we create experiences that transform lives. We combine ancient wisdom with modern holistic practices to support healing at every level — body, mind, energy, and soul. 
We are here to walk alongside you as guides — not to "fix" you, but to help you remember your wholeness.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h3 className="text-2xl font-semibold mb-2 text-[#9d33c4]">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}