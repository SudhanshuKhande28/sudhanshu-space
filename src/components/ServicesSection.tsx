import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Video, Layers, Wand2, PenTool, Monitor } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete brand identity design including logos, color palettes, and brand guidelines.",
    color: "#ff5a00",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing for commercials, social media, and corporate content.",
    color: "#ff8c00",
  },
  {
    icon: Layers,
    title: "Motion Graphics",
    description: "Eye-catching animations and motion graphics that bring your content to life.",
    color: "#ff6a00",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description: "Creative designs for print and digital media, from posters to social media.",
    color: "#ff5a00",
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description: "User-centered interface designs for websites and mobile applications.",
    color: "#ff8c00",
  },
  {
    icon: Wand2,
    title: "Visual Effects",
    description: "Professional VFX and compositing for film, TV, and digital content.",
    color: "#ff6a00",
  },
];

const ServiceCard = ({
  service,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  service: typeof services[0];
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) => {
  const isHovered = hoveredIndex === index;
  const isOther = hoveredIndex !== null && !isHovered;

  return (
    <motion.div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      animate={{
        scale: isHovered ? 1.1 : isOther ? 0.93 : 1,
        z: isHovered ? 80 : 0,
        rotateX: isHovered ? -6 : 0,
        rotateY: isHovered ? 4 : 0,
        opacity: isOther ? 0.55 : 1,
        y: isHovered ? -18 : 0,
      }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        zIndex: isHovered ? 20 : 1,
        cursor: "default",
      }}
      className="relative p-8 rounded-2xl border transition-colors duration-300"
      whileTap={{ scale: 0.97 }}
    >
      {/* Card background */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          background: isHovered
            ? `linear-gradient(135deg, #0f0a05 0%, #1c0e00 100%)`
            : "transparent",
          borderColor: isHovered
            ? `rgba(255,90,0,0.5)`
            : "rgba(255,255,255,0.08)",
        }}
        style={{
          border: "1px solid",
          borderColor: isHovered ? "rgba(255,90,0,0.5)" : "rgba(255,255,255,0.08)",
        }}
      />

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? `0 30px 80px rgba(255,90,0,0.25), 0 0 0 1px rgba(255,90,0,0.3), inset 0 0 40px rgba(255,90,0,0.05)`
            : "0 4px 20px rgba(0,0,0,0.2)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Grid lines inside card on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          backgroundImage: "linear-gradient(rgba(255,90,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,90,0,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Radial glow inside */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{ background: `radial-gradient(circle at 30% 30%, rgba(255,90,0,0.1) 0%, transparent 70%)` }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          animate={{
            scale: isHovered ? 1.15 : 1,
            rotate: isHovered ? [0, -8, 8, 0] : 0,
            boxShadow: isHovered
              ? `0 0 30px rgba(255,90,0,0.5)`
              : "none",
          }}
          transition={{ duration: 0.4 }}
          className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6"
        >
          <service.icon className="w-7 h-7 text-primary-foreground" />
        </motion.div>

        {/* Title */}
        <motion.h3
          animate={{ color: isHovered ? "#ff8c42" : "#ffffff" }}
          transition={{ duration: 0.2 }}
          className="text-xl font-display font-bold mb-3"
        >
          {service.title}
        </motion.h3>

        {/* Animated underline */}
        <motion.div
          className="h-px mb-3 rounded-full"
          animate={{ width: isHovered ? "60px" : "0px" }}
          transition={{ duration: 0.3 }}
          style={{ background: "linear-gradient(to right, #ff5a00, transparent)" }}
        />

        {/* Description */}
        <motion.p
          animate={{ color: isHovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.45)" }}
          transition={{ duration: 0.2 }}
          className="leading-relaxed text-sm"
        >
          {service.description}
        </motion.p>

        {/* Hover badge */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
          transition={{ duration: 0.25, delay: 0.1 }}
          className="mt-4 flex items-center gap-2"
        >
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ background: "rgba(255,90,0,0.15)", color: "#ff8c42", border: "1px solid rgba(255,90,0,0.3)" }}
          >
            Learn More →
          </span>
        </motion.div>
      </div>

      {/* Corner decorations on hover */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: "rgba(255,90,0,0.5)" }} />
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: "rgba(255,90,0,0.5)" }} />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: "rgba(255,90,0,0.5)" }} />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: "rgba(255,90,0,0.5)" }} />
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #080500 50%, #0a0a0a 100%)" }} />

      {/* Glowing orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(ellipse, rgba(255,90,0,0.2) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,90,0,0.15) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-primary font-medium text-sm uppercase tracking-widest inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            What I Do
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
            My{" "}
            <span className="text-gradient" style={{ filter: "drop-shadow(0 0 20px rgba(255,90,0,0.3))" }}>
              Services
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
            Hover over a service to explore ✦
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: "1200px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                service={service}
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
