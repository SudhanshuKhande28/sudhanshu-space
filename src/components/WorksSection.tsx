import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Play } from "lucide-react";

import pulseFit from "@/assets/works/pulse-fit.png";
import brewco from "@/assets/works/brewco.png";
import urbanThreads from "@/assets/works/urban-threads.png";
import foodieStop from "@/assets/works/foodie-stop.png";
import zyvox from "@/assets/works/zyvox.png";
import kidolearn from "@/assets/works/kidolearn.png";
import nexflow from "@/assets/works/nexflow.png";
import techNova from "@/assets/works/tech-nova.png";
import wanderlust from "@/assets/works/wanderlust.png";

const categories = ["All", "Branding", "Video", "UI/UX", "Motion"];

const works = [
  {
    title: "Pulse Fit - Poster Design",
    category: "Branding",
    image: pulseFit,
  },
  {
    title: "BrewCo - Brand Identity",
    category: "Branding",
    image: brewco,
  },
  {
    title: "Urban Threads - Social Media",
    category: "Branding",
    image: urbanThreads,
  },
  {
    title: "Foodie Stop - Product Commercial",
    category: "Video",
    image: foodieStop,
  },
  {
    title: "Tech Nova - Promo Video",
    category: "Video",
    image: techNova,
  },
  {
    title: "WanderLust - YouTube Series",
    category: "Video",
    image: wanderlust,
  },
  {
    title: "Zyvox - Logo Animation",
    category: "Motion",
    image: zyvox,
  },
  {
    title: "NexFlow - Mobile App Design",
    category: "UI/UX",
    image: nexflow,
  },
  {
    title: "KidoLearn - Mobile App Design",
    category: "UI/UX",
    image: kidolearn,
  },
];

const WorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <section id="works" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
            My <span className="text-gradient">Recent Works</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Works Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary cursor-pointer"
            >
              <img
                src={work.image}
                alt={work.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-display font-bold mb-2">{work.title}</h3>
                  <span className="text-primary text-sm">{work.category}</span>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <button className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform">
                      {work.category === "Video" || work.category === "Motion" ? (
                        <Play className="w-5 h-5" />
                      ) : (
                        <ExternalLink className="w-5 h-5" />
                      )}
                    </button>
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

export default WorksSection;
