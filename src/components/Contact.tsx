// import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { Textarea } from './ui/textarea';
// import { Label } from './ui/label';
import { MapPin, Phone, Mail, Clock,  } from 'lucide-react';

export function Contact() {
// useEffect(() => {
//   const widget = document.getElementById('schedulista-widget-00') as HTMLIFrameElement | null;
//   if (widget) {
//     widget.addEventListener('load', () => {
//       try {
//         const iframeDoc = widget.contentWindow?.document;
//         if (!iframeDoc) return;
//         const buttons = iframeDoc.querySelectorAll('button');
//         buttons.forEach(button => {
//           (button as HTMLElement).style.backgroundColor = '#9d33c4';
//           (button as HTMLElement).style.borderColor = '#9d33c4';
//         });
//       } catch (err) {
//         // Access to iframe content may be blocked by cross-origin policy; ignore errors.
//       }
//     });
//   }
// }, []);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   service: '',
  //   message: ''
  // });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const sendToEmail = async () => {
//     const emailData = {
//       to: 'ikigaisoulwellness@gmail.com',
//       subject: `New Contact Form Submission from ${formData.name}`,
//       body: `
// New Contact Form Submission - Ikigai Soul Wellness

// Contact Details:
// 👤 Name: ${formData.name}
// 📧 Email: ${formData.email}
// 📞 Phone: ${formData.phone}
// 🎯 Service Interest: ${formData.service}

// Message:
// ${formData.message}

// ---
// This message was sent from your website contact form.
//       `.trim()
//     };

//     // Method 1: Using mailto link (most reliable)
//     const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
//     window.location.href = mailtoLink;
//   };

//   const sendToWhatsApp = () => {
//     // Format the message for WhatsApp
//     const whatsappMessage = `
// New Contact Form Submission - Ikigai Soul Wellness

// 👤 Name: ${formData.name}
// 📧 Email: ${formData.email}
// 📞 Phone: ${formData.phone}
// 🎯 Service Interest: ${formData.service}
// 💬 Message: ${formData.message}
//     `.trim();

//     // Encode the message for URL
//     const encodedMessage = encodeURIComponent(whatsappMessage);
    
//     // WhatsApp phone number
//     const phoneNumber = '61449841838';
    
//     // Create WhatsApp URL
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
//     // Open WhatsApp in new tab
//     window.open(whatsappUrl, '_blank');
//   };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     // Send to both WhatsApp and Email
  //     await sendToEmail();
      
  //     // Small delay to ensure email client opens first
  //     setTimeout(() => {
  //       sendToWhatsApp();
  //     }, 1000);

  //     // Optional: Show success message
  //     alert('Thank you for your message! Opening email and WhatsApp to send your inquiry.');

  //     // Reset form after submission
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       service: '',
  //       message: ''
  //     });

  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     alert('There was an error sending your message. Please try again.');
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // Alternative method using FormSubmit.co (free service)
  // const handleSubmitWithFormSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   // This method requires changing the form to use FormSubmit.co
  //   const form = e.target as HTMLFormElement;
  //   form.action = 'https://formsubmit.co/sidhardhcr007@gmail.com';
  //   form.method = 'POST';
    
  //   // Add hidden fields for FormSubmit configuration
  //   const hiddenInputs = [
  //     { name: '_subject', value: `New Contact from ${formData.name}` },
  //     { name: '_template', value: 'table' },
  //     { name: '_captcha', value: 'false' },
  //     { name: '_next', value: window.location.href + '?success=true' }
  //   ];

  //   // Remove existing hidden inputs
  //   const existingHiddenInputs = form.querySelectorAll('input[type="hidden"]');
  //   existingHiddenInputs.forEach(input => input.remove());

  //   // Add new hidden inputs
  //   hiddenInputs.forEach(({ name, value }) => {
  //     const input = document.createElement('input');
  //     input.type = 'hidden';
  //     input.name = name;
  //     input.value = value;
  //     form.appendChild(input);
  //   });

  //   // Submit the form
  //   form.submit();
  // };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['4/10 EDMONDSON STREET', 'CAMPBELL, ACT, 2612, Australia'],
      color: 'text-green-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+61 44 984 1838'],
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['ikigaisoulwellness@gmail.com'],
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 7AM - 8PM', 'Sat-Sun: 8AM - 6PM'],
      color: 'text-orange-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-muted/50">
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
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to begin your wellness journey? Contact us today to schedule a consultation 
            or learn more about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <Card className="border-0 shadow-2xl">
    <CardHeader>
      {/* <CardTitle className="text-2xl">Send us a Message</CardTitle> */}
    </CardHeader>
    <CardContent>
      <div className="relative w-full overflow-hidden rounded-lg" style={{ height: 'auto', minHeight: '600px' }}>
        <iframe 
          id="schedulista-widget-00" 
          src="https://www.schedulista.com/schedule/ikigaisoulwellness1?mode=widget" 
          allowTransparency={true} 
          frameBorder="0" 
          scrolling="no" 
          width="100%" 
          height="100%"
          className="absolute inset-0 "
          style={{ minHeight: '600px'}}
          loading="lazy"
          
        />
        
      </div>
      <script 
        id="schedulista-widget-script-00" 
        type="text/javascript" 
        src="https://www.schedulista.com/schedule/ikigaisoulwellness1/widget.js"
        async
        
      />
    </CardContent>
  </Card>
</motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 mx-auto mb-4 ${info.color} bg-opacity-10 rounded-full flex items-center justify-center`}>
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <h3 className="text-lg mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="relative h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl mb-2">Find Us Here</h3>
                    <p className="text-muted-foreground mb-4">
                      4/10 EDMONDSON STREET<br />
                      CAMPBELL, ACT, 2612, Australia
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => window.open('https://www.google.com/maps/place/Unit+4%2F10+Edmondson+St,+Campbell+ACT+2612,+Australia/@-35.2855097,149.1497889,17z/data=!3m1!4b1!4m6!3m5!1s0x6b164d9d251eee1f:0xf8b1955ea13abe26!8m2!3d-35.2855141!4d149.1523638!16s%2Fg%2F11lp618_xq?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Open in Maps
                    </Button>
                  </div>
                  
                  {/* Decorative Elements */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute bottom-6 right-6 w-2 h-2 bg-blue-400 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                    className="absolute top-1/3 right-8 w-1 h-1 bg-purple-400 rounded-full"
                  />
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
