import { motion } from 'motion/react';

import { Separator } from './ui/separator';
import { Heart, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    services: [
      { name: 'Massage Therapy', action: () => scrollToSection('services') },
      { name: 'Meditation Classes', action: () => scrollToSection('services') },
      { name: 'Yoga & Movement', action: () => scrollToSection('services') },
      { name: 'Nutrition Counseling', action: () => scrollToSection('services') },
      { name: 'Aromatherapy', action: () => scrollToSection('services') },
      { name: 'Group Workshops', action: () => scrollToSection('services') }
    ],
    company: [
      { name: 'About Us', action: () => scrollToSection('about') },
      { name: 'Our Team', action: () => scrollToSection('about') },
      { name: 'Blog', action: () => scrollToSection('blog') },
      { name: 'Contact', action: () => scrollToSection('contact') },
      { name: 'Privacy Policy', action: () => {} },
      { name: 'Terms of Service', action: () => {} }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="text-white" style={{ backgroundColor: "#030213" }}>
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=" flex  gap-10 items-center justify-center flex-col md:flex-row"
          >
            <img className="w-screen h-full" src="https://tse1.mm.bing.net/th/id/OIP.PsgtNhW9G55Q5jW3AKUvLgHaDv?pid=Api&P=0&h=220" alt="" />
            <p className="text-lg ">
              We acknowledge that the Traditional Custodians of Country throughout Australia and their continuing connection to land, sea and community. We pay our respects to all Aboriginal and Torres Strait Islander peoples, their cultures and to their Elders past and present.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl mb-4 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              Ikigai Soul Wellness
            </motion.h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner in holistic wellness, helping you find balance, 
              peace, and vitality through comprehensive mind-body-spirit care.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={link.action}
                    whileHover={{ x: 5 }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={link.action}
                    whileHover={{ x: 5 }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <MapPin className="w-5 h-5 mt-0.5 text-primary-foreground/60" />
                <div>
                  <p className="text-primary-foreground/80">4/10 EDMONDSON STREET</p>
                  <p className="text-primary-foreground/80">CAMPBELL, ACT, 2612, Australia</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <Phone className="w-5 h-5 text-primary-foreground/60" />
                <p className="text-primary-foreground/80">+61 044 984 1838</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <Mail className="w-5 h-5 text-primary-foreground/60" />
                <p className="text-primary-foreground/80">ikigaisoulwellness@gmail.com</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <Separator className="bg-white" />

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-center md:text-left">
            © 2025 Ikigai Soul Wellness Center. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-primary-foreground/60">
            <span>Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.div>
            <span>for your wellness</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}