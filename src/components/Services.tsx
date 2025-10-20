import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {  Heart,  Dumbbell, Leaf } from 'lucide-react';


const services = [
  {
    icon: Heart,
    title: 'Reiki Healing',
    description: 'A powerful energy healing modality that works on the physical, emotional, and spiritual levels. Reiki helps release blocked energy, promotes deep relaxation, and supports natural healing.',
    image: '/istockphoto-975131512-612x612.jpg',
    price: '30 min – 50$ | 60 min -80$'
  },
  // {
  //   icon: Brain,
  //   title: 'Meditation & Mindfulness',
  //   description: 'Learn powerful tools to cultivate presence, reduce anxiety, and live with greater intention and calm.',
  //   image: 'https://images.unsplash.com/photo-1687783615494-b4a1f1af8b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3IlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NTk1NTk3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //   price: null
  // },
  {
    icon: Dumbbell,
    title: 'Access Bars Therapy',
    description: 'An innovative, hands-on process that clears limiting beliefs and mental clutter stored in the brain. Access Bars helps you let go of fear, judgment, and old patterns, making space for clarity, ease, and change.',
    image: 'https://t3.ftcdn.net/jpg/06/96/29/44/240_F_696294441_lIZImFPIuQf9BaIQsSmT1qmJeKXhr0Nt.jpg',
    price: '60min -80$'
  },
  {
    icon: Leaf,
    title: 'Ayurvedic Wellness',
    description: 'Work with us to create lasting change in your health, mindset, and soul journey through personalized coaching and energy work.',
    image: 'https://www.itoozhiayurveda.in/wp-content/uploads/2023/01/Ayurvedic-medicine-scaled.jpg',
    price: '60min -80$'
  },
  // {
  //   icon: Sparkles,
  //   title: 'Holistic Life Transformation',
  //   description: 'Personalized coaching to help you achieve balance and fulfillment in all areas of life.',
  //   image: 'https://images.unsplash.com/photo-1655970580622-4a547789c850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGNlbnRlciUyMHNwYSUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzU5NTkyNTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //   price: null
  // }
];

export function Services() {

 const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#9674c8] to-[#9b04d2] bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of wellness services designed to nurture your body, mind, and spirit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full"
                  >
                    <service.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full transition-opacity duration-300 opacity-100 md:opacity-0 group-hover:opacity-100">
                    <span className="text-sm font-semibold text-primary">{service.price}</span>
                    </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-8">
            Ready to begin your wellness journey? Book a consultation today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick= {() => scrollToSection('contact')}
            className="bg-gradient-to-r from-[#9674c8] to-[#9b04d2] text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}