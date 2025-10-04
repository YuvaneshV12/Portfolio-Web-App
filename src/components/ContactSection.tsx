import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        // 👇 Embed sender email in message for clarity
        message: `Sender Email: ${formData.email}\n\nMessage:\n${formData.message}`,
        reply_to: formData.email
      };

      const response = await emailjs.send(
        'service_lboxb6m', // Your service ID
        'template_sdcun9m', // Your template ID
        templateParams,
        'i3JK3S9kn4TOsflX1' // Your public key
      );

      if (response.status === 200) {
        setSubmitResult({
          success: true,
          message: "Your message has been sent! I'll get back to you soon."
        });

        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitResult({
        success: false,
        message: "Failed to send message. Please try again or email me directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32 bg-[#0D1320]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3 text-portfolio-purple">GET IN TOUCH</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Contact.</h3>
          <div className="h-1 md:h-2 w-20 md:w-24 bg-portfolio-purple mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-6 md:mb-8">
                <label htmlFor="name" className="block text-white mb-2 md:mb-3 text-lg md:text-xl">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1A1E2E] border border-gray-700 rounded-lg px-4 md:px-6 py-3 md:py-4 text-white text-lg focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                  placeholder="What's your name?"
                  required
                />
              </div>

              <div className="mb-6 md:mb-8">
                <label htmlFor="email" className="block text-white mb-2 md:mb-3 text-lg md:text-xl">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#1A1E2E] border border-gray-700 rounded-lg px-4 md:px-6 py-3 md:py-4 text-white text-lg focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                  placeholder="What's your email?"
                  required
                />
              </div>

              <div className="mb-6 md:mb-8">
                <label htmlFor="message" className="block text-white mb-2 md:mb-3 text-lg md:text-xl">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-[#1A1E2E] border border-gray-700 rounded-lg px-4 md:px-6 py-3 md:py-4 text-white text-lg focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                  placeholder="What do you want to say?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-portfolio-purple text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all text-lg md:text-xl ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitResult && (
                <div className={`mt-4 p-4 rounded-lg text-lg ${submitResult.success ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                  {submitResult.message}
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-full">
              <img
                src="https://i.ibb.co/5WKMXLfc/b8225408-20cc-4164-83c9-f8e24514e22c.jpg"
                alt="3D Sphere"
                className="w-full h-full object-cover rounded-xl opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6 md:p-10">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Let's work together</h3>
                  <div className="flex justify-center space-x-6 md:space-x-8">
                    <a href="https://www.linkedin.com/in/yuvanesh-v-78730b32a" target="_blank" rel="noopener noreferrer" className="social-icon text-2xl md:text-3xl" aria-label="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="https://github.com/YuvaneshV12" target="_blank" rel="noopener noreferrer" className="social-icon text-2xl md:text-3xl" aria-label="GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5-.73-1.02-1.92-1.56-3.2-1.5-.63-.2-1.3-.4-2-.5-1-2-2-3-4-3s-3 .5-4 3c-.7.1-1.37.3-2 .5-1.28-.06-2.47.48-3.2 1.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.68 1-1 2.24-1 3.5v4" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;