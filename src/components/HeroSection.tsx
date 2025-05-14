
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 md:pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <motion.div 
            className="md:w-3/5 text-center md:text-left mt-8 md:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-4 md:mb-6">
              <motion.div
                className="h-1 md:h-2 w-6 md:w-10 bg-portfolio-purple mr-4"
                initial={{ width: 0 }}
                animate={{ width: 24 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              ></motion.div>
              <motion.h2 
                className="ml-4 md:ml-8 text-[30px] text-portfolio-purple"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Hi, I'm
              </motion.h2>
            </div>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 ml-2 md:ml-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="text-white">Yuvanesh V</span>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-5 max-w-xl lg:max-w-2xl text-justify ml-4 md:ml-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              I solve programming problems and build modern web pages and applications.
            </motion.p>

            <motion.p 
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-5 max-w-xl lg:max-w-2xl text-justify ml-4 md:ml-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              With expertise in React, TypeScript, and modern frontend frameworks, I create responsive, accessible, and performant user interfaces.
            </motion.p>
            
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-5 max-w-xl lg:max-w-2xl text-justify ml-4 md:ml-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              I combine clean code principles with creative problem-solving to deliver exceptional digital experiences that exceed client expectations.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="flex flex-col md:flex-row gap-4 md:gap-6"
            >
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={800} 
                offset={-50}
                className="bg-portfolio-purple text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all inline-block text-lg md:text-xl ml-4 md:ml-8 mb-4 md:mb-5"
              >
                Contact Me
              </Link>
              <Link
                to="achievements"
                spy={true}
                smooth={true}
                duration={800}
                offset={-50}
                className="bg-transparent border border-portfolio-purple text-portfolio-purple px-8 py-4 rounded-full font-medium hover:bg-portfolio-purple/10 transition-all inline-block text-lg md:text-xl ml-4 md:ml-0 mb-4 md:mb-5"
              >
                View My Work
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.4 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://i.ibb.co/ZzCfkfZN/c9b6b078-7269-4dfd-8279-9c7493326198.png" 
              alt="Yuvanesh's PC" 
              className="max-w-full h-auto rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
