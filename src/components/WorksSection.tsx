import { useState, useRef, useEffect } from "react";
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

// Flip Card Component — normal grid layout, stack animation via initial/animate
const FlipCard = ({
  work,
  index,
  isDealt,
}: {
  work: typeof works[0];
  index: number;
  isDealt: boolean;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Stack: all cards start rotated and offset to look like a pile
  const stackRotateZ = (index % 3 - 1) * 6;
  const stackRotateX = 20;
  const stackY = index * -4; // slight vertical offset per card

  return (
    <motion.div
      style={{ perspective: "1200px" }}
      className="aspect-[4/3] cursor-pointer w-full"
      initial={{
        opacity: 0,
        rotateZ: stackRotateZ,
        rotateX: stackRotateX,
        y: stackY + 80,
        scale: 0.75,
      }}
      animate={
        isDealt
          ? { opacity: 1, rotateZ: 0, rotateX: 0, y: 0, scale: 1 }
          : { opacity: 0, rotateZ: stackRotateZ, rotateX: stackRotateX, y: stackY + 80, scale: 0.75 }
      }
      transition={{
        duration: 0.75,
        delay: isDealt ? index * 0.11 : 0,
        ease: [0.23, 1, 0.32, 1],
      }}
      onMouseEnter={() => isDealt && setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        style={{
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 55%)" }} />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-sm border border-white/10">
              {work.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-base leading-snug">{work.title}</h3>
          </div>
          <div className="absolute top-3 right-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-7 h-7 rounded-full border-2 border-white/20 flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-primary/80" />
            </motion.div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-5"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #0f0a05 0%, #1c0e00 50%, #0f0a05 100%)",
            border: "1px solid rgba(255,90,0,0.25)",
            boxShadow: "inset 0 0 60px rgba(255,90,0,0.07), 0 20px 40px rgba(0,0,0,0.5)",
          }}
        >
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,90,0,0.1) 0%, transparent 70%)" }} />
          {/* Grid */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(255,90,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,90,0,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }} />

          <motion.span
            animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : -8 }}
            transition={{ delay: 0.3 }}
            className="px-3 py-1 rounded-full text-xs font-semibold mb-3 border"
            style={{ background: "rgba(255,90,0,0.15)", borderColor: "rgba(255,90,0,0.35)", color: "#ff8c42" }}
          >
            {work.category}
          </motion.span>

          <motion.h3
            animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 8 }}
            transition={{ delay: 0.33 }}
            className="text-base font-display font-bold text-center mb-2 text-white leading-snug"
          >
            {work.title}
          </motion.h3>

          <motion.div
            animate={{ width: isFlipped ? 50 : 0 }}
            transition={{ delay: 0.38, duration: 0.35 }}
            className="h-px mb-3 rounded-full"
            style={{ background: "linear-gradient(to right, transparent, #ff5a00, transparent)" }}
          />

          <motion.p
            animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 8 }}
            transition={{ delay: 0.4 }}
            className="text-center text-xs mb-4 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {work.desc}
          </motion.p>

          <motion.button
            animate={{ opacity: isFlipped ? 1 : 0, scale: isFlipped ? 1 : 0.5 }}
            transition={{ delay: 0.44, type: "spring", stiffness: 200 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #ff5a00, #ffaa00)", boxShadow: "0 0 18px rgba(255,90,0,0.45)" }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {work.category === "Video" || work.category === "Motion" ? (
              <><Play className="w-3 h-3" /> Watch</>
            ) : (
              <><ExternalLink className="w-3 h-3" /> View Project</>
            )}
          </motion.button>

          {/* Corner decorations */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: "rgba(255,90,0,0.35)" }} />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: "rgba(255,90,0,0.35)" }} />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: "rgba(255,90,0,0.35)" }} />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: "rgba(255,90,0,0.35)" }} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isDealt, setIsDealt] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        setIsDealt(true);
        setHasAnimated(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated]);

  const handleCategoryChange = (category: string) => {
    setIsDealt(false);
    setActiveCategory(category);
    setTimeout(() => setIsDealt(true), 150);
  };

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <section id="works" className="py-24 md:py-32 relative overflow-hidden">

      {/* Rich background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0f0800 50%, #0a0a0a 100%)" }} />

      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.06, 0.14, 0.06], x: [0, 30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(ellipse, rgba(255,90,0,0.3) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,60,0,0.2) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,120,0,0.15) 0%, transparent 70%)" }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "linear-gradient(rgba(255,90,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,90,0,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Floating dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${10 + i * 8}%`,
              left: `${5 + i * 8}%`,
              background: i % 2 === 0 ? "rgba(255,90,0,0.4)" : "rgba(255,255,255,0.15)",
            }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>

        {/* Header */}
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
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
            My{" "}
            <span className="text-gradient" style={{ filter: "drop-shadow(0 0 25px rgba(255,90,0,0.4))" }}>
              Recent Works
            </span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-primary mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ boxShadow: "0 0 10px rgba(255,90,0,0.5)" }}
          />
          <motion.p
            className="text-muted-foreground text-sm mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Hover over cards to flip and see project details ✦
          </motion.p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category, i) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
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

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, index) => (
              <FlipCard
                key={work.title}
                work={work}
                index={index}
                isDealt={isDealt}
              />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default WorksSection;
