
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { name: "Full Stack Developer", icon: "https://i.ibb.co/Lhs8CJZH/4918049-removebg-preview.png" },
    { name: "Frontend Web Developer", icon: "https://media-hosting.imagekit.io/4a6eaf6a7b974f73/49180349-removebg-preview.png?Expires=1841817970&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2mBtpyLZ~kOWwH0Xnc-mu84rohAXgfQ1NBx6PBsxuZKJptMEo79ynHo8VtEuz4qNi64s10Vhi~XAD~nioVrWqbEiiVL4wHdya49zjt8sUDHzbuUiLgXIG5t1P1GkDvUwf9wwLEpCMZlR1cmdhfy69swcnMEZ9sWIPNuKVmf1-Pe6waUx7NW5bU7Q2IRMAqKPF4aKtocmkG7zKHTz6Ca-UHlo76KXimg4xpz3mqPKVG1ebqE45xMdKXq2ghad5lwdi25OvEM-pLhQaM1qk1fAOxAwHmuuAtcKEIyi0ApKVHP~SYumY6oiw2X6cenVh3gI-M0kQMB8Uk4bwkOW-RDqnw__" },
    { name: "Java Backend Developer", icon: "https://media-hosting.imagekit.io/5cd77b4ace1443e9/49180429-removebg-preview.png?Expires=1841817916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=URpcLCXxYtFeOdrwBb6ena6waESXHlLLRl042oPeGOVolW388gz1cZ~YXxyVZrGe1pVr2CpQOGlDsk5h-U4bcO1yJWcoSFBboxYKBK67M7NP9WCzdPqpVYntL-1oiaZifptrQtdTRmCveGSuY9L6ibGhA9cyAbyA0JrWzitM0JX6qoOk0jgCJeVIgmycD5NDixp2ttEDSm5sVVsyrwUPCwbAjX2Xl831J1Fy0TkyLGfnDuw-8xxoR6r0mPtCp~cytsF2DXj3RNFdedag93FSh~DgWjotko-SKOlN5Gpbd0hQfayNqT27w3sKIZLH-8ePcPsd7HYO0QsknDt77Xp7aQ__" },
    { name: "Software Developer & Problem Solver", icon: "https://media-hosting.imagekit.io/441fd4b6ad23413b/4918s049-removebg-preview.png?Expires=1841817978&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=T-ZILbeLrPALyV7lEeOCkhP62A1pfATOtepL5KxjO8zTPRDEefyO0x6YQEUv9RiRgpc6pENpCZ0H6ReAEqYjMDkUyjboIjdhE4I059Bp5sWe2519BL~oVkl9M1Kmmo65kQ4QfVnjs3J7u6k-3R5YZQoqxpIwTKbsn2ey5kTEkxVqDO7zhJxYEiPznRCp1oKswGw~zYjaTPJdUQwITwn84mTgjsnBzceqqQMwmI2YDwQc2GMZlRwrSiGPQPkPhbYosWS0Vf5ZDUeoGdOjfWQUAMBDme5~s-st-fnZ4U4scKfmOZCM9oXC4N3SNjsQ4vtzMTGXJUxmGlQaUk6MqnjcLA__" },
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
