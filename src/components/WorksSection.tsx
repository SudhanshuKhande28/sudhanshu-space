import { motion, AnimatePresence } from "framer-motion";
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
  { title: "Pulse Fit - Poster Design", category: "Branding", image: pulseFit },
  { title: "BrewCo - Brand Identity", category: "Branding", image: brewco },
  { title: "Urban Threads - Social Media", category: "Branding", image: urbanThreads },
  { title: "Foodie Stop - Product Commercial", category: "Video", image: foodieStop },
  { title: "Tech Nova - Promo Video", category: "Video", image: techNova },
  { title: "WanderLust - YouTube Series", category: "Video", image: wanderlust },
  { title: "Zyvox - Logo Animation", category: "Motion", image: zyvox },
  { title: "NexFlow - Mobile App Design", category: "UI/UX", image: nexflow },
  { title: "KidoLearn - Mobile App Design", category: "UI/UX", image: kidolearn },
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
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0.15em" } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary font-medium text-sm uppercase tracking-wider inline-block"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
            {"My ".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
            <span className="text-gradient">
              {"Recent Works".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.04, type: "spring", stiffness: 300 }}
                  className="inline-block"
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
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
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Works Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                key={work.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                whileHover={{ y: -6 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary cursor-pointer"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <h3 className="text-xl font-display font-bold mb-2">{work.title}</h3>
                    <span className="text-primary text-sm">{work.category}</span>
                    <div className="flex items-center justify-center gap-4 mt-4">
                      <motion.button
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-full bg-primary text-primary-foreground"
                      >
                        {work.category === "Video" || work.category === "Motion" ? (
                          <Play className="w-5 h-5" />
                        ) : (
                          <ExternalLink className="w-5 h-5" />
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default WorksSection;
