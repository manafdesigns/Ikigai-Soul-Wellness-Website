import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Clock, Heart } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Happy Clients', value: '2,500+' },
  { icon: Clock, label: 'Years Experience', value: '15+' },
  { icon: Award, label: 'Certifications', value: '50+' },
  { icon: Heart, label: 'Success Stories', value: '1,200+' }
];

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Founder & Wellness Director',
    image: 'https://images.unsplash.com/photo-1662549905044-e3f71c293989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc1OTU5MjU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Certified holistic health practitioner with 15+ years of experience in integrative wellness.'
  },
  {
    name: 'Michael Thompson',
    role: 'Lead Massage Therapist',
    image: 'https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwdGhlcmFweSUyMHdlbGxuZXNzfGVufDF8fHx8MTc1OTU3ODMzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Licensed massage therapist specializing in deep tissue and therapeutic bodywork.'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Yoga & Meditation Instructor',
    image: 'https://images.unsplash.com/photo-1687783615494-b4a1f1af8b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3IlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NTk1NTk3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Certified yoga instructor and mindfulness coach with expertise in stress reduction techniques.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#9674c8] to-[#9b04d2] pb-2.5 md:pb-4 bg-clip-text text-transparent">
            About Ikigai
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded with a vision to create a sanctuary of healing and wellness, Serenity Wellness Center 
            has been transforming lives through holistic health practices for over a decade.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1655970580622-4a547789c850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGNlbnRlciUyMHNwYSUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzU5NTkyNTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wellness Center Interior"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl mb-6">Our Story</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              What started as a small meditation studio has grown into a comprehensive wellness center 
              serving thousands of clients on their journey to better health and inner peace.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We believe that true wellness encompasses the mind, body, and spirit. Our integrated 
              approach combines ancient wisdom with modern science to provide personalized care 
              that addresses your unique needs.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Holistic Approach</div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Expert Team</div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">Personalized Care</div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-green-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl mb-4">Meet Our Team</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our experienced practitioners are dedicated to guiding you on your wellness journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}