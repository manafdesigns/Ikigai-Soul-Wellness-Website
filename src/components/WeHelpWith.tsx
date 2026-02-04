import { motion } from 'motion/react';
import { Card, CardContent, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';



const benefitsData = {
  benefits: {
    adults: {
      category: "For Adults",
      description: "You may benefit from our healing therapies if you are experiencing:",
      sections: [
        {
          title: "Emotional and Mental Well-Being",
          items: [
            "Stress, anxiety, or emotional overwhelm",
            "Low mood, sadness, or burnout",
            "Feeling stuck, uninspired, or disconnected",
            "Sleep disturbances or chronic fatigue",
            "Lack of mental clarity or focus"
          ],
          image: "https://media.istockphoto.com/id/1369837941/photo/calm-young-woman-hold-hands-on-chest-praying.webp?a=1&b=1&s=612x612&w=0&k=20&c=2yVGDoXzWtoM1jyVj9YWjjKe56SZ_tY8qq8AmuyhKIY="
        },
        {
          title: "Physical and Energetic Imbalances",
          items: [
            "Chronic pain, body tension, or fatigue",
            "Hormonal imbalances or menstrual discomfort",
            "Digestive issues, bloating, or sluggish metabolism",
            "Headaches, migraines, or body aches",
            "Post-illness recovery or low immunity"
          ],
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.0&auto=format&fit=crop&w=500&q=80"
        },
        {
          title: "Lifestyle and Personal Growth",
          items: [
            "Difficulty in decision-making or emotional healing",
            "Desire for inner peace, spiritual growth, or self-connection",
            "Releasing limiting beliefs or negative thought patterns",
            "Support during life transitions (career, relationships, loss)",
            "Desire to balance body, mind, and energy naturally"
          ],
          image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.0&auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    childrenTeens: {
      category: "For Children and Teens",
      description: "Our gentle, age-appropriate energy balancing sessions can support:",
      sections: [
        {
          title: "Emotional Support",
          items: [
            "Exam stress, anxiety, or fear",
            "Restlessness or hyperactivity",
            "Low confidence or social withdrawal",
            "Nightmares or sleep disturbances"
          ],
          image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.0&auto=format&fit=crop&w=500&q=80"
        },
        {
          title: "Physical and Energy Imbalances",
          items: [
            "Frequent colds or weak immunity",
            "Headaches, stomach discomfort, or fatigue",
            "Emotional sensitivity or mood swings"
          ],
          image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.0&auto=format&fit=crop&w=500&q=80"
        },
        {
          title: "Development and Focus",
          items: [
            "Difficulty concentrating or learning challenges",
            "Overstimulation from screen time or peer pressure",
            "Encouraging calmness, confidence, and creativity"
          ],
          image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.0&auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    womensWellness: {
      category: "Women's Wellness",
      items: [
        "Menstrual irregularities and cramps",
        "Fertility and preconception wellness support",
        "Menopausal mood and energy balancing",
        "Emotional support during pregnancy and postpartum"
      ],
      image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.0&auto=format&fit=crop&w=500&q=80"
    }
  }
};

export function WeHelpWith() {


  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-muted/50">
      {/* IICT Membership Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
      >
        <img
          src="/IICET_logo.jpg"
          alt="IICT Logo"
          className="h-16 w-auto object-contain"
          style={{ background: 'white', borderRadius: '8px', padding: '4px' }}
        />
        <p className='text-xl font-semibold text-[#9d33c4]'>Full Member</p>
        <p className="text-lg text-gray-700 text-center md:text-left max-w-xl">
          We are proud members of the{' '}
          <span className="font-semibold text-[#9d33c4]">
            International Institute for Complementary Therapists (IICT)
          </span>
          , upholding the highest standards in holistic wellness and professional practice.
        </p>
      </motion.div>
      <div className="container mx-auto px-4">
        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-12 text-center bg-gradient-to-r from-[#9674c8] to-[#9b04d2] bg-clip-text text-transparent">
            Who Can Benefit
          </h2>

          {/* Adults Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#9674c8] to-[#9b04d2] bg-clip-text text-transparent">{benefitsData.benefits.adults.category}</h3>
            <p className="text-lg text-muted-foreground mb-6">{benefitsData.benefits.adults.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefitsData.benefits.adults.sections.map((section) => (
                <Card key={section.title} className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-32 overflow-hidden">
                    <ImageWithFallback
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <CardTitle className="text-white text-lg font-semibold drop-shadow-md">
                        {section.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-base text-muted-foreground ">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Children & Teens Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#9674c8] to-[#9b04d2] bg-clip-text text-transparent">{benefitsData.benefits.childrenTeens.category}</h3>
            <p className="text-lg text-muted-foreground mb-6">{benefitsData.benefits.childrenTeens.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefitsData.benefits.childrenTeens.sections.map((section) => (
                <Card key={section.title} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="relative h-32 overflow-hidden">
                    <ImageWithFallback
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <CardTitle className="text-white text-lg font-semibold drop-shadow-md">
                        {section.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-base text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Women's Wellness Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#9674c8] to-[#9b04d2] bg-clip-text text-transparent">{benefitsData.benefits.womensWellness.category}</h3>
            <Card className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-4xl  group">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <div className="relative h-48 md:h-full overflow-hidden">
                    <ImageWithFallback
                      src={benefitsData.benefits.womensWellness.image}
                      alt={benefitsData.benefits.womensWellness.category}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <CardContent className="pt-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {benefitsData.benefits.womensWellness.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-base text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}