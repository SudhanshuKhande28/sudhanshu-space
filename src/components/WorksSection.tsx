import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence, useAnimation } from "framer-motion";
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

// 3D Flip Card Component
const FlipCard = ({
  work,
  index,
  isDealt,
  stackIndex,
}: {
  work: typeof works[0];
  index: number;
  isDealt: boolean;
  stackIndex: number;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Each card in stack is offset slightly for 3D depth effect
  const stackOffsetX = (stackIndex - 4) * 3;
  const stackOffsetY = (stackIndex - 4) * 3;
  const stackRotateZ = (stackIndex - 4) * 1.5;
  const stackOffsetZ = stackIndex * 6;

  return (
    <motion.div
      style={{ perspective: "1200px" }}
      className="aspect-[4/3] cursor-pointer"
      // Initial stack position — all cards pile in center
      initial={{
        x: stackOffsetX,
        y: stackOffsetY,
        rotateZ: stackRotateZ,
        rotateX: 8,
        rotateY: -8,
        scale: 0.85,
        opacity: 1,
        zIndex: stackIndex,
      }}
      // Deal out to grid position
      animate={
        isDealt
          ? {
              x: 0,
              y: 0,
              rotateZ: 0,
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              opacity: 1,
              zIndex: 1,
            }
          : {
              x: stackOffsetX,
              y: stackOffsetY,
              rotateZ: stackRotateZ,
              rotateX: 8,
              rotateY: -8,
              scale: 0.85,
              zIndex: stackIndex,
            }
      }
      transition={{
        duration: 0.7,
        delay: isDealt ? index * 0.12 : 0,
        ease: [0.23, 1, 0.32, 1],
        opacity: { duration: 0.3 },
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
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          }}
        >
          <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }}
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 text-white backdrop-blur-sm border border-white/10">
              {work.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-base">{work.title}</h3>
          </div>
          {/* Spinning hover hint */}
          <div className="absolute top-3 right-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-7 h-7 rounded-full border-2 border-white/30 flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-primary/80" />
            </motion.div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #0f0a05 0%, #1a0e00 50%, #0f0a05 100%)",
            border: "1px solid rgba(255,90,0,0.3)",
            boxShadow: "inset 0 0 60px rgba(255,90,0,0.08), 0 20px 40px rgba(0,0,0,0.5)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,90,0,0.1) 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,90,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,90,0,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <motion.span
            animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : -10 }}
            transition={{ delay: 0.3 }}
            className="px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{ background: "rgba(255,90,0,0.15)", borderColor: "rgba(255,90,0,0.4)", color: "#ff8c42" }}
          >
            {work.category}
          </motion.span>

          <motion.h3
            animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 10 }}
            transition={{ delay: 0.35 }}
            className="text-xl font-display font-bold text-center mb-3 text-white"
          >
            {work.title}
          </motion.h3>

          <motion.div
            animate={{ width: isFlipped ? 60 : 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="h-px mb-3 rounded-full"
            style={{ background: "linear-gradient(to right, transparent, #ff5a00, transparent)" }}
          />

          <motion.p
            animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 10 }}
            transition={{ delay: 0.4 }}
            className="text-center text-sm mb-6 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {work.desc}
          </motion.p>

          <motion.button
            animate={{ opacity: isFlipped ? 1 : 0, scale: isFlipped ? 1 : 0.5 }}
            transition={{ delay: 0.45, type: "spring", stiffness: 200 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #ff5a00, #ffaa00)",
              boxShadow: "0 0 25px rgba(255,90,0,0.5)",
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {work.category === "Video" || work.category === "Motion" ? (
              <><Play className="w-4 h-4" /> Watch</>
            ) : (
              <><ExternalLink className="w-4 h-4" /> View Project</>
            )}
          </motion.button>

          {/* Corner decorations */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 rounded-tl-sm" style={{ borderColor: "rgba(255,90,0,0.4)" }} />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 rounded-tr-sm" style={{ borderColor: "rgba(255,90,0,0.4)" }} />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 rounded-bl-sm" style={{ borderColor: "rgba(255,90,0,0.4)" }} />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 rounded-br-sm" style={{ borderColor: "rgba(255,90,0,0.4)" }} />
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Trigger deal animation when section comes into view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      // Short delay — let user see the stack first
      const timer = setTimeout(() => {
        setIsDealt(true);
        setHasAnimated(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated]);

  // Reset deal when category changes
  const handleCategoryChange = (category: string) => {
    setIsDealt(false);
    setActiveCategory(category);
    setTimeout(() => setIsDealt(true), 100);
  };

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <section id="works" className="py-24 md:py-32 bg-card relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 w-[600px] h-[300px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,90,0,0.2) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-6" ref={ref}>

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

        {/* Cards Grid — stacked then dealt */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: "1500px" }}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, index) => (
              <FlipCard
                key={work.title}
                work={work}
                index={index}
                isDealt={isDealt}
                stackIndex={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stack label shown before dealing */}
        <AnimatePresence>
          {!isDealt && isInView && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center mt-6"
            >
              <span className="text-muted-foreground text-sm animate-pulse">
                ✦ Dealing cards...
              </span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default WorksSection;

