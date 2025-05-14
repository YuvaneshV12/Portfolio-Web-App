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
      title: "Carbon FootPrint Tracker for Sustainable Living",
      image: "https://i.ibb.co/MwNgpTH/b8225408-20cc-4164-83c9-f8e24514e22o.png",
      description: "Developed a web-based Carbon Footprint Tracker that calculates and visualizes users' daily emissions, offering personalized insights and real-time data to promote eco-friendly habits, sustainable lifestyle choices, and raise awareness about environmental impact.",
      codeLink: "https://github.com/YuvaneshV12/india-carbon-footprint-tracker.git",
      liveDemoLink: "https://carbon-footprint-tracker-one.vercel.app/"
    },
    {
      title: "E-Commerce Book Store Using Java and Spring",
      image: "https://media-hosting.imagekit.io/34553fbccd2b4e96/Screenshot%202025-05-14%20130352.png?Expires=1841818714&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=amL~PpMnQn4WzAKPj4MXQ4MDSe7PIIHaRkVJivUNv5oiiO39G7jCmdwSP3pIP72m9sWF0k4Nl32BTaxzX1dZakf0Cx4UWPzYWaiaitzPY5MlDCnUELAn7SSGLB6QvNVSHtc-F8WPV3cRIPIaHFQ8mazvqcc7A5BxDo6NvAXcko5bcPItX93z2Y1bYROQVmEAOrst9-uo0vcA1UASgxu7JTLf58KGJpAZ0H5Agg0wO2lH0vMwa8ZLWLvRZh93p-dVyKdtUZ0h5vOweE1y8PaitC3ya4JUa59gpJFRczgQF4soV5KyJ52vqC1OgPmurIz5wkf6JLO-9ag26LXJt1GWWQ__",
      description: "Developed a fully functional online book store web application that allows users to browse, search, and purchase books. Implemented a responsive and user-friendly front end using React.js, HTML, CSS, and JavaScript for smooth navigation and interactive UI.",
      codeLink: "https://github.com/YuvaneshV12/online-books-store.git",
      liveDemoLink: " http://localhost:8080/onlinebookstore/CustomerLogin.html"
    },
    { 
      title: "USSD Based Grocery Ordering Application",
      image: "https://i.ibb.co/tPBG80s2/b8225408-20cc-4164-83c9-f8e24514e22p.jpg",
      description: "Developed a USSD-based grocery ordering application, enabling users to browse, order, and pay for groceries through simple text commands on feature phones, ensuring accessibility, speed, user-friendly, and reliable service in low-connectivity environments.",
      codeLink: "https://github.com/YuvaneshV12/USSD-based-Grocery-ordering-application.git",
      liveDemoLink: "https://github.com/YuvaneshV12/USSD-based-Grocery-ordering-application.git"
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