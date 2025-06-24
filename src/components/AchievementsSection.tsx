import { motion } from "framer-motion";

interface Achievement {
  title: string;
  image: string;
  description: string;
  codeLink: string;
  liveDemoLink: string;
}

const AchievementsSection = () => {
  const achievements: Achievement[] = [
    {
      title: "Chrono Gift Web App",
      image: "https://i.ibb.co/8T9xdK3/Screenshot-2025-06-24-193408.png",
      description: "Developed a digital platform that lets users upload content and set a timer and passcode to unlock it later, ensuring secure, time-based access and promoting intentional digital sharing. Gained experience in full-stack development, state management, and secure data handling practices.",
      codeLink: "https://github.com/YuvaneshV12/chrono-gift.git",
      liveDemoLink: "https://chrono-gift-2dlp.onrender.com/"
    },
    {
      title: "E-Commerce Book Store Using Java and Spring",
      image: "https://i.ibb.co/84zkBWm9/Screenshot-2025-05-14-130352.png",
      description: "Developed a fully functional online book store web application that allows users to browse, search, and purchase books. Implemented a responsive and user-friendly front end using React.js, HTML, CSS, and JavaScript for smooth navigation and interactive UI.",
      codeLink: "https://github.com/YuvaneshV12/online-books-store.git",
      liveDemoLink: " http://localhost:8080/onlinebookstore/CustomerLogin.html"
    },
    { 
      title: "Blog Editor Web App",
      image: "https://i.ibb.co/gLqF8QjW/Screenshot-2025-06-12-205655.png",
      description: "Developed a blog editing web application with ReactJS, Node.js, and MongoDB, enabling users to create, edit, and manage blogs with markdown support, user authentication, and smooth performance, ensuring secure storage and deployment via Render.",
      codeLink: "https://github.com/YuvaneshV12/Blog-Editor-Web-App.git",
      liveDemoLink: "https://blog-editor-web-app.onrender.com"
    }
  ];

  return (
    <section id="achievements" className="py-20 md:py-28 lg:py-32 bg-[#0D1320]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            <span className="text-portfolio-purple">Projects</span>
          </h2>
          <div className="h-1 md:h-2 w-20 md:w-24 bg-portfolio-purple mx-auto mb-8 md:mb-10"></div>
          <p className="text-gray-300 max-w-3xl lg:max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl text-justify">
            Following projects showcases my skills and experience through real-world examples of 
            my work. Each project is briefly described with links to code repositories and live demos in 
            it. It reflects my ability to solve complex problems, work with different technologies, and 
            manage projects effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-1">
                <div className="bg-[#1A1E2E] p-4 md:p-6 rounded-lg h-full">
                  <div className="overflow-hidden rounded-lg mb-4 md:mb-6">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title} 
                      className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-300 hover:scale-110" 
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-3">{achievement.title}</h3>
                  <p className="text-lg md:text-xl text-gray-400">{achievement.description}</p>
                  <div className="mt-4 md:mt-6 flex justify-between">
                    <a 
                      href={achievement.codeLink} 
                      className="text-lg md:text-xl text-portfolio-purple hover:underline"
                    >
                      Code
                    </a>
                    <a 
                      href={achievement.liveDemoLink} 
                      className="text-lg md:text-xl text-portfolio-cyan hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;