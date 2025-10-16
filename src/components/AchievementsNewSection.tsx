
import { motion } from "framer-motion";

interface Achievement {
  title: string;
  image: string;
  description: string;
}

const AchievementsNewSection = () => {
  const achievements: Achievement[] = [
    {
      title: "Secured First Place in Code Master Furtura'25 Event",
      image: "https://i.ibb.co/chVwRp9h/Whats-App-Image-2025-10-04-at-17-37-52-1f3ba001.jpg",
      description: "Secured first place in Code Master Sairam Furtura'25 by solving real world problems with efficient solution in hackerrank."
    },
    {
      title: "Secured First Place in Debugging Vyntra'25 Event",
      image: "https://i.ibb.co/wNdL80V5/Screenshot-20250927-204255-Gallery.jpg",
      description: "Secured First Place in SIMATS's Vyntra'25 Debugging event by efficiently fixing errors and restructuring code under time constraints."
    },
    {
      title: "Secured Second Place in Retro Code Innovatia'25 Event",
      image: "https://i.ibb.co/kVcsq0fb/IMG-20251013-152830258-HDR-1.jpg",
      description: "Secured second place in Retro Code Sairam Innovatia'25 by solving real world problems with team work and solving dare challenges."
    },
    {
      title: "Secured Third Place in Code-A-Thon Event",
      image: "https://i.ibb.co/zWqQZWh7/b8225408-20cc-4164-83c9-f8e24514e22v.jpg",
      description: "Secured Third Place in Code-A-Thon by solving real-world problems with efficient, scalable solutions under strict time constraints."
    },
    {
      title: "Solved 400+ LeetCode Problems",
      image: "https://i.ibb.co/tTgd5yWX/Screenshot-2025-10-04-191022.png",
      description: "Solved LeetCode problems to strengthen skills in optimized data structures and algorithmic challenges with reduced time complexity."
    },
    {
      title: "Achieved 97.57 Percentile in the YoungTucks Naukri Contest",
      image: "https://i.ibb.co/mCVZ09S3/Young-Turks25-Round-1-page-0001.jpg",
      description: "Achieved 97.57 percentile in Naukri's YoungTurks challenging aptitude round, ranking 12,411 out of over 500,000 participants."
    }
  ];

  return (
    <section id="achievements-section" className="py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            <span className="text-portfolio-purple">Achievements</span>
          </h2>
          <div className="h-1 md:h-2 w-20 md:w-24 bg-portfolio-purple mx-auto mb-8 md:mb-10"></div>
          <p className="text-gray-300 max-w-3xl lg:max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl">
            Recognition and accomplishments from my professional journey, highlighting my expertise
            and contributions to the field of web development and design.
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsNewSection;
