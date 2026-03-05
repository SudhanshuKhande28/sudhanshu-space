import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import sudhanshuAbout from "@/assets/sudhanshu-about.jpg";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "30+", label: "Projects Done" },
  { value: "10+", label: "Happy Clients" },
];

const tools = [
  { name: "Photoshop", icon: "🎨", level: 90 },
  { name: "Premiere Pro", icon: "🎬", level: 88 },
  { name: "After Effects", icon: "✨", level: 82 },
  { name: "Illustrator", icon: "🖊️", level: 85 },
];

const funFacts = [
  { icon: "🌍", label: "Based in", value: "Pune, India" },
  { icon: "🎓", label: "Education", value: "Design Graduate" },
  { icon: "💡", label: "Specialty", value: "Visual Storytelling" },
  { icon: "🚀", label: "Available", value: "For Freelance" },
];

const hobbies = [
  { icon: "🎵", label: "Music" },
  { icon: "✈️", label: "Travel" },
  { icon: "🎮", label: "Gaming" },
  { icon: "📷", label: "Photography" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0500 0%, #050200 50%, #0a0500 100%)" }}>

      {/* Futuristic background grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,90,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,90,0,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Glowing orbs */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.1, 0.04] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,90,0,0.3) 0%, transparent 70%)" }} />
      <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.08, 0.04] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,140,0,0.2) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="text-xs tracking-[6px] text-primary uppercase font-medium">Discover</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-3">
            About <span className="text-gradient">Me</span>
          </h2>
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — Photo + Fun Facts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center gap-8"
          >
            {/* Photo with neon border */}
            <div className="relative group">
              {/* Animated neon glow rings */}
              <motion.div
                animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.03, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-1 rounded-2xl pointer-events-none"
                style={{ background: "linear-gradient(135deg, #ff5a00, #ffaa00, #ff2200, #ff8c00)", padding: "2px", borderRadius: "18px", filter: "blur(1px)" }}
              />
              <motion.div
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute -inset-3 rounded-2xl pointer-events-none blur-md"
                style={{ background: "linear-gradient(135deg, rgba(255,90,0,0.4), rgba(255,170,0,0.4))" }}
              />
              {/* Corner tech decorations */}
              {["tl","tr","bl","br"].map((pos) => (
                <div key={pos} className="absolute w-5 h-5 pointer-events-none z-20" style={{
                  top: pos.includes("t") ? "-2px" : "auto",
                  bottom: pos.includes("b") ? "-2px" : "auto",
                  left: pos.includes("l") ? "-2px" : "auto",
                  right: pos.includes("r") ? "-2px" : "auto",
                  borderTop: pos.includes("t") ? "2px solid #ff5a00" : "none",
                  borderBottom: pos.includes("b") ? "2px solid #ff5a00" : "none",
                  borderLeft: pos.includes("l") ? "2px solid #ff5a00" : "none",
                  borderRight: pos.includes("r") ? "2px solid #ff5a00" : "none",
                }} />
              ))}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative aspect-[4/5] w-72 rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 0 40px rgba(255,90,0,0.2), 0 0 80px rgba(255,90,0,0.08)" }}
              >
                <img src={sudhanshuAbout} alt="Sudhanshu Khande" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {/* Scan line effect */}
                <motion.div
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  className="absolute inset-x-0 h-12 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(255,90,0,0.08), transparent)" }}
                />
                {/* Dark overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
              </motion.div>
            </div>

            {/* Fun Facts Grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {funFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.04, borderColor: "rgba(255,90,0,0.6)" }}
                  className="p-3 rounded-xl border border-primary/20 cursor-default transition-all duration-300"
                  style={{ background: "rgba(255,90,0,0.04)", backdropFilter: "blur(10px)" }}
                >
                  <div className="text-xl mb-1">{fact.icon}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{fact.label}</div>
                  <div className="text-sm font-medium text-foreground mt-0.5">{fact.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            {/* Bio */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-primary font-medium text-xs uppercase tracking-[4px]"
              >
                — Who I Am
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4"
              >
                Passionate About <span className="text-gradient">Visual Excellence</span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground leading-relaxed mb-4"
              >
                With over 2 years of experience in graphic design and video editing,
                I specialize in creating compelling visual content that tells your story.
                From brand identities to motion graphics, I bring creativity and technical
                expertise to every project.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-muted-foreground leading-relaxed"
              >
                Based in Pune, India 🇮🇳 — My approach combines artistic vision with
                strategic thinking, ensuring every design not only looks stunning
                but also achieves your goals.
              </motion.p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="text-center p-4 rounded-xl border border-primary/15 cursor-default"
                  style={{ background: "rgba(255,90,0,0.04)" }}
                >
                  <div className="text-3xl font-display font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tools */}
            <div>
              <motion.h4
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="text-xs uppercase tracking-[4px] text-primary mb-4"
              >
                — Tools & Software
              </motion.h4>
              <div className="flex flex-col gap-3">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    onHoverStart={() => setHoveredTool(i)}
                    onHoverEnd={() => setHoveredTool(null)}
                    className="cursor-default"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium flex items-center gap-2">
                        <span>{tool.icon}</span> {tool.name}
                      </span>
                      <span className="text-xs text-primary font-mono">{tool.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tool.level}%` } : {}}
                        transition={{ duration: 1.2, delay: 1 + i * 0.15, ease: "easeOut" }}
                        className="h-full rounded-full relative"
                        style={{ background: "linear-gradient(to right, #ff5a00, #ffaa00)" }}
                      >
                        {/* Animated shimmer */}
                        <motion.div
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                          className="absolute inset-0"
                          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)", skewX: "-20deg" }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <motion.h4
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
                className="text-xs uppercase tracking-[4px] text-primary mb-4"
              >
                — Interests & Hobbies
              </motion.h4>
              <div className="flex gap-3 flex-wrap">
                {hobbies.map((hobby, i) => (
                  <motion.div
                    key={hobby.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.3 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -3, boxShadow: "0 0 20px rgba(255,90,0,0.3)" }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/25 cursor-default transition-all duration-300"
                    style={{ background: "rgba(255,90,0,0.06)" }}
                  >
                    <span className="text-lg">{hobby.icon}</span>
                    <span className="text-sm font-medium">{hobby.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
