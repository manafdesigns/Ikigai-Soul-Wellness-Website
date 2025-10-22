import  { useState } from 'react';
import { motion } from 'motion/react';
// import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {  X } from 'lucide-react';

// const stats = [
// 	{ icon: Users, label: 'Happy Clients', value: '2,500+' },
// 	{ icon: Clock, label: 'Years Experience', value: '15+' },
// 	{ icon: Award, label: 'Certifications', value: '50+' },
// 	{ icon: Heart, label: 'Success Stories', value: '1,200+' }
// ];

const team = [
	{
		name: 'Nikita Sameer',
		role: 'Founder of Ikigai Soul Wellness, Canberra',
		image: '/DR. NIKITHA.png',
		bio: 'Nikita is a certified energy healer and Ayurvedic practitioner with over a decade of experience in natural healing and mind-body wellness.  She completed her Bachelor of Ayurvedic Medicine and Surgery (BAMS) from the Government Ayurveda College, Trivandrum, India —one of India’s most prestigious institutions for Ayurvedic education. This rigorous training gave her a strong foundation in classical Ayurveda, natural medicine, and holistic wellness principles.'
	}
	// {
	//   name: 'Michael Thompson',
	//   role: 'Lead Massage Therapist',
	//   image: 'https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwdGhlcmFweSUyMHdlbGxuZXNzfGVufDF8fHx8MTc1OTU3ODMzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
	//   bio: 'Licensed massage therapist specializing in deep tissue and therapeutic bodywork.'
	// },
	// {
	//   name: 'Emma Rodriguez',
	//   role: 'Yoga & Meditation Instructor',
	//   image: 'https://images.unsplash.com/photo-1687783615494-b4a1f1af8b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3IlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NTk1NTk3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
	//   bio: 'Certified yoga instructor and mindfulness coach with expertise in stress reduction techniques.'
	// }
];

export function About() {
	const [selectedMember, setSelectedMember] = useState<null | typeof team[0]>(null);

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
						Founded with a vision to create a sanctuary of healing and wellness, Ikigai Wellness Center
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
								src="/facility.jpg"
								alt="Wellness Center Interior"
								className="w-full h-96 object-cover rounded-2xl shadow-2xl"
							/>
							{/* <motion.div
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
              </motion.div> */}
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
							Ikigai Soul Wellness is more than a wellness center — we are a community and a movement toward conscious living. Our name reflects our mission — helping you discover your ikigai, the unique purpose that gives your life meaning. Inspired by the Japanese concept of Ikigai — “a reason for being” — our center is dedicated to helping you rediscover balance, inner peace, and a deep connection to your life’s purpose. We help you release what no longer serves you and reconnect with your true self.
						</p>
						<p className="text-lg leading-relaxed text-muted-foreground">
							At Ikigai Soul Wellness you step into a serene space where healing meets purpose. We help you to release stress, recharge your energy & reconnect with your inner purpose.
						</p>
						<div className="flex flex-wrap gap-4 mt-8">
							<div className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Holistic Approach</div>
							<div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Expert Team</div>
							<div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">Personalized Care</div>
						</div>
					</motion.div>
				</div>

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
				<p className="text-lg text-gray-700 text-center md:text-left max-w-xl">
					We are proud members of the{' '}
					<span className="font-semibold text-[#9d33c4]">
						International Institute for Complementary Therapists (IICT)
					</span>
					, upholding the highest standards in holistic wellness and professional practice.
				</p>
			</motion.div>

				{/* Stats Section */}
				{/* <motion.div
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
        </motion.div> */}

				{/* Team Section */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h3 className="text-3xl mb-4">Meet Our Practitioner</h3>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Our experienced practitioner is dedicated to guiding you on your wellness journey.
					</p>
				</motion.div>

				<div className="">
					{team.map((member, index) => (
						<motion.div
							key={member.name}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.15 }}
							viewport={{ once: true }}
							className="flex flex-col md:flex-row items-center gap-6"
						>
							{/* Image on left */}
							<div className="w-full md:w-1/3">
								<ImageWithFallback
									src={member.image}
									alt={member.name}
									className="w-full h-11/12 md:h-11/12 object-cover rounded-2xl shadow-lg"
								/>
							</div>

							{/* Content on right */}
							<div className="w-full md:w-2/3 space-y-3">
								<h4 className="text-2xl font-semibold">{member.name}</h4>
								<p className="text-primary mb-2">{member.role}</p>
								<p className="text-muted-foreground">{member.bio}</p>
								<div className="mt-4">
									<button
										type="button"
										onClick={() => setSelectedMember(member)}
										className="inline-block px-5 py-2 rounded-full bg-[#9d33c4] text-white font-semibold hover:bg-[#8b2aa8] transition-colors duration-200"
									>
										Read More
									</button>
								</div>
							</div>
						</motion.div>
					))}
                </div>
			</div>

			{/* Modal */}
			{selectedMember && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
					<div className="bg-white rounded-2xl  shadow-2xl w-full max-w-lg md:max-w-2xl p-4 md:p-8 relative animate-fadeIn mx-2">
						<button
							className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-500 hover:text-gray-800"
							onClick={() => setSelectedMember(null)}
							aria-label="Close"
						>
							<X className="w-6 h-6" />
						</button>
						<div className="flex flex-col items-center">
							<img
								src={selectedMember.image}
								alt={selectedMember.name}
								className="w-24 h-30 md:w-30 md:h-36 rounded-full object-cover mb-4 border-4 border-[#9d33c4]"
							/>
							<h3 className="text-xl md:text-xl font-bold mb-2 text-center">{selectedMember.name}</h3>
							<p className="text-primary mb-2 text-center">{selectedMember.role}</p>
							<p className="text-gray-700 mb-4 text-sm md:text-base text-justify max-h-[50vh] md:max-h-[60vh] overflow-y-auto pr-1">
								Nikita is a certified energy healer and Ayurvedic practitioner with over a decade of experience in natural healing and mind-body wellness. She completed her Bachelor of Ayurvedic Medicine and Surgery (BAMS) from the Government Ayurveda College, Trivandrum, India —one of India’s most prestigious institutions for Ayurvedic education. This rigorous training gave her a strong foundation in classical Ayurveda, natural medicine, and holistic wellness principles.
								<br />
								<br />
								Guided by a deep passion for holistic health and inner harmony, she has dedicated her life to helping people reconnect with their natural state of balance—physically, mentally, and energetically. Her journey into the healing arts began with her deep curiosity about the human body, mind, and spirit, and how true health arises from the balance of all three
								<br />
								<br />
								Thus, after moving to the UAE, Nikita expanded her healing journey by studying Reiki Levels 1, 2, and 3, as well as Access Bars Consciousness, from Dubai. These powerful modalities deepened her understanding of energy healing and the mind-body connection, allowing her to integrate ancient Ayurvedic wisdom with modern energy therapies.
								<br />
								<br />
								In May 2025, she brought her vision to life by founding Ikigai Soul Wellness in Canberra, Australia—a tranquil space dedicated to personal transformation, holistic health, and spiritual awakening. She is also certified as the full member of International Institute for Complementary Therapists(IICT)with all the attendant rights and privileges
							</p>
							{/* Add more details here if available */}
							<button
								className="mt-2 px-6 py-2 rounded-full bg-[#9d33c4] text-white font-semibold hover:bg-primary/90 transition-colors"
								onClick={() => setSelectedMember(null)}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Certifications slider (slides left → right via repeating animation) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-12"
            >
                <div className="overflow-hidden">
                    {/* Inner strip animated horizontally. Duplicate set for seamless loop */}
                    <motion.div
                        aria-hidden="true"
                        className="flex items-center gap-8 w-max"
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ duration: 14, ease: 'linear', repeat: Infinity }}
                    >
                        <img src="/ACT GOV VULNERABLE PEOPLE.png" alt="Certificate 1" className="h-24 object-contain" />
                        <img src="CBD.png" alt="Certificate 2" className="h-24 object-contain" />
                        <img src="/NRT-Logo-pmd1zlrfw3jlc8rps6n3le6x97p81ff17o9pucfhlo.png" alt="IICT Logo" className="h-24 object-contain" />
                        <img src="/FIRST AID.png" alt="Certificate 3" className="h-24 object-contain" />
						<img src="/REIKHI.png" alt="Certificate 3" className="h-24 object-contain" />
						<img src="/ACCESS BARS LOGO.png" alt="Certificate 3" className="h-24 object-contain" />
						<img src="/GOV KERALA AYURVEDA.png" alt="Certificate 3" className="h-24 object-contain" />
						<img src="/BAMS.png" alt="Certificate 3" className="h-24 object-contain" />

                        {/* duplicate */}
                        <img src="/ACT GOV VULNERABLE PEOPLE.png" alt="Certificate 1" className="h-24 object-contain" />
                        <img src="CBD.png" alt="Certificate 2" className="h-24 object-contain" />
                        <img src="/NRT-Logo-pmd1zlrfw3jlc8rps6n3le6x97p81ff17o9pucfhlo.png" alt="IICT Logo" className="h-24 object-contain" />
                        <img src="/FIRST AID.png" alt="Certificate 3" className="h-24 object-contain" />
						<img src="/REIKHI.png" alt="Certificate 3" className="h-24 object-contain" />
						<img src="/ACCESS BARS LOGO.png" alt="Certificate 3" className="h-24 object-contain" />
						<img src="/GOV KERALA AYURVEDA.png" alt="Certificate 3" className="h-24 object-contain" />
						<img src="/BAMS.png" alt="Certificate 3" className="h-24 object-contain" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
