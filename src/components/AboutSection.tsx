import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import sudhanshuAbout from "@/assets/sudhanshu-about.jpg";

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
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
              <img 
                src={sudhanshuAbout} 
                alt="Sudhanshu Khande" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6">
              Passionate About <span className="text-gradient">Visual Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over 5 years of experience in graphic design and video editing, 
              I specialize in creating compelling visual content that tells your story. 
              From brand identities to motion graphics, I bring creativity and technical 
              expertise to every project.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              My approach combines artistic vision with strategic thinking, ensuring 
              that every design not only looks stunning but also achieves your goals.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <span className="text-3xl font-display font-bold text-gradient">5+</span>
                <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <span className="text-3xl font-display font-bold text-gradient">50+</span>
                <p className="text-muted-foreground text-sm mt-1">Projects Done</p>
              </div>
              <div>
                <span className="text-3xl font-display font-bold text-gradient">30+</span>
                <p className="text-muted-foreground text-sm mt-1">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
