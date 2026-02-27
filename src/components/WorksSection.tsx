import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
  { title: "Pulse Fit - Poster Design", category: "Branding", image: pulseFit, desc: "Bold fitness poster design for a modern gym brand." },
  { title: "BrewCo - Brand Identity", category: "Branding", image: brewco, desc: "Complete logo & brand identity for a premium coffee shop." },
  { title: "Urban Threads - Social Media", category: "Branding", image: urbanThreads, desc: "Instagram & Facebook campaign for a streetwear brand." },
  { title: "Foodie Stop - Product Commercial", category: "Video", image: foodieStop, desc: "Short-form restaurant advertisement for social media." },
  { title: "Tech Nova - Promo Video", category: "Video", image: techNova, desc: "High-energy promo video for a tech startup launch." },
  { title: "WanderLust - YouTube Series", category: "Video", image: wanderlust, desc: "Cinematic travel video editing for a YouTube channel." },
  { title: "Zyvox - Logo Animation", category: "Motion", image: zyvox, desc: "Dynamic animated logo reveal with motion graphics." },
  { title: "NexFlow - Mobile App Design", category: "UI/UX", image: nexflow, desc: "Complete UI/UX design for a productivity mobile app." },
  { title: "KidoLearn - Mobile App Design", category: "UI/UX", image: kidolearn, desc: "Fun & colorful learning app UI design for kids." },
];

// 3D Tilt Card Component
const TiltCard = ({ work, index }: { work: typeof works[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -15;
    const tiltY = ((x - centerX) / centerX) * 15;
    setTilt({ x: tiltX, y: tiltY });
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: isHovered ? 1.04 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? "0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(255,90,0,0.15)"
            : "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        {/* Image */}
        <motion.img
          src={work.image}
          alt={work.title}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Cursor spotlight */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,90,0,0.15) 0%, transparent 60%)`,
            }}
          />
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-10" style={{ transform: "translateZ(20px)" }}>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 text-white backdrop-blur-sm border border-white/10">
            {work.category}
          </span>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center p-6"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 100%)" }}
        >
          <div style={{ transform: "translateZ(30px)" }} className="text-center">
            <motion.h3
              className="text-xl font-display font-bold mb-2"
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {work.title}
            </motion.h3>
            <motion.p
              className="text-muted-foreground text-sm mb-3"
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {work.desc}
            </motion.p>
            <motion.span
              className="text-primary text-xs font-semibold uppercase tracking-wider block mb-4"
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              {work.category}
            </motion.span>
            <motion.button
              className="p-3 rounded-full text-primary-foreground"
              style={{ background: "linear-gradient(135deg, #ff5a00, #ffaa00)", boxShadow: "0 0 20px rgba(255,90,0,0.6)" }}
              animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {work.category === "Video" || work.category === "Motion" ? (
                <Play className="w-5 h-5" />
              ) : (
                <ExternalLink className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom glow bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(to right, #ff5a00, #ffaa00)" }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <section id="works" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 w-[600px] h-[300px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,90,0,0.15) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            className="text-primary font-medium text-sm uppercase tracking-widest inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
            My{" "}
            <span className="text-gradient" style={{ filter: "drop-shadow(0 0 20px rgba(255,90,0,0.3))" }}>
              Recent Works
            </span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-primary mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category, i) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground border border-transparent hover:border-primary/50"
              }`}
              style={activeCategory === category ? { boxShadow: "0 0 20px rgba(255,90,0,0.4)" } : {}}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, index) => (
              <TiltCard key={work.title} work={work} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default WorksSection;
