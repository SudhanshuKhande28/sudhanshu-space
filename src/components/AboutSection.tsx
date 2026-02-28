import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import sudhanshuAbout from "@/assets/sudhanshu-about.jpg";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "30+", label: "Projects Done" },
  { value: "10+", label: "Happy Clients" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative group"
          >
            <motion.div
              className="aspect-[4/5] max-w-sm mx-auto rounded-2xl overflow-hidden bg-secondary"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={sudhanshuAbout} 
                alt="Sudhanshu Khande" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-2xl -z-10"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-primary font-medium text-sm uppercase tracking-wider inline-block"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6"
            >
              {"Passionate About ".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.03 }}
                >
                  {char}
                </motion.span>
              ))}
              <span className="text-gradient">
                {"Visual Excellence".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 + i * 0.03 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
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
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              My approach combines artistic vision with strategic thinking, ensuring 
              that every design not only looks stunning but also achieves your goals.
            </motion.p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.15 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="cursor-default"
                >
                  <span className="text-3xl font-display font-bold text-gradient">{stat.value}</span>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
