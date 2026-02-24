import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Video, Layers, Wand2, PenTool, Monitor } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete brand identity design including logos, color palettes, and brand guidelines.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing for commercials, social media, and corporate content.",
  },
  {
    icon: Layers,
    title: "Motion Graphics",
    description: "Eye-catching animations and motion graphics that bring your content to life.",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description: "Creative designs for print and digital media, from posters to social media.",
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description: "User-centered interface designs for websites and mobile applications.",
  },
  {
    icon: Wand2,
    title: "Visual Effects",
    description: "Professional VFX and compositing for film, TV, and digital content.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0.15em" } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary font-medium text-sm uppercase tracking-wider inline-block"
          >
            What I Do
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
            {"My ".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
            <span className="text-gradient">
              {"Services".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, rotateX: 90 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.06, type: "spring" }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, borderColor: "hsl(15 90% 60% / 0.5)" }}
              className="group p-8 rounded-2xl bg-card border border-border transition-shadow duration-300 hover:shadow-card cursor-default"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl font-display font-bold mb-3 group-hover:text-gradient transition-all duration-300">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
