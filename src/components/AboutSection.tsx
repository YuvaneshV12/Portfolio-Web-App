
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { name: "Full Stack Developer", icon: "https://i.ibb.co/Lhs8CJZH/4918049-removebg-preview.png" },
    { name: "Frontend Web Developer", icon: "https://i.ibb.co/YFx8nvpC/49180493-removebg-preview.png" },
    { name: "Java Backend Developer", icon: "https://i.ibb.co/LdDfX8HD/49180492-removebg-preview.png" },
    { name: "Software Developer & Problem Solver", icon: "https://i.ibb.co/bM4kPB9J/49180491-removebg-preview.png" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            About <span className="text-portfolio-purple">Me</span>
          </h2>
          <div className="h-1 md:h-2 w-20 md:w-24 bg-portfolio-purple mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 text-portfolio-purple">Who Am I?</h3>
            <p className="text-base md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-5 max-w-xl lg:max-w-2xl text-justify ml-4 md:ml-8">
              I'm a passionate Full Stack Developer and Java Developer with expertise in modern web technologies like
              React, Node.js, and Java. I create functional, user-friendly websites and scalable web applications,
              combining strong front-end and back-end skills. I write clean, efficient, and maintainable code, always
              aiming to deliver high-performance solutions that meet user needs.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-5 max-w-xl lg:max-w-2xl text-justify ml-4 md:ml-8
">
              A fast learner and tech enthusiast, I stay current with the latest industry trends to build innovative
              and reliable software. I enjoy turning ideas into real, working solutions and believe in continuous improvement.
              Whether working independently or collaborating in a team, I'm committed to bringing your vision to life through
              smart, practical development.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-[#1A1E2E] p-8 md:p-10 rounded-xl flex flex-col items-center text-center hover:border-portfolio-purple border border-transparent transition-all"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 mb-4 md:mb-6 animate-float" 
                />
                <h4 className="text-xl md:text-2xl font-medium">{skill.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
