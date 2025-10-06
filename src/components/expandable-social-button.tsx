"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Instagram, Facebook, X } from "lucide-react"

export function ExpandableSocialButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/+610449841838", // Replace with your WhatsApp number
      color: "from-green-500 to-green-600",
      delay: 0.1,
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ikigaisoulwellness/", // Replace with your Instagram
      color: "from-pink-500 to-purple-600",
      delay: 0.15,
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/ikigaisoulwellness", // Replace with your Facebook
      color: "from-blue-500 to-blue-600",
      delay: 0.2,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-3"
    >
      <AnimatePresence>
        {isExpanded && (
          <>
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ duration: 0.3, delay: social.delay }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`bg-gradient-to-r ${social.color} text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center`}
              >
                <social.icon className="w-6 h-6" />
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(155, 4, 210, 0.3)",
            "0 0 30px rgba(155, 4, 210, 0.5)",
            "0 0 20px rgba(155, 4, 210, 0.3)",
          ],
          rotate: isExpanded ? 180 : 0,
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          rotate: {
            duration: 0.3,
          },
        }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gradient-to-r from-[#9674c8] to-[#9b04d2] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-2"
      >
        {isExpanded ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </motion.button>
    </motion.div>
  )
}
