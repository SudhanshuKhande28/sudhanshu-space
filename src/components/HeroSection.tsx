import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import sudhanshuPhoto from "@/assets/sudhanshu-photo.jpg";
import { useTypewriter } from "@/hooks/useTypewriter";

const HeroSection = () => {
  const { displayedText: greeting, isComplete: greetingDone } = useTypewriter("Hello, I'm", 100, 400);
  const { displayedText: nameText, isComplete: nameDone } = useTypewriter("Sudhanshu Khande", 70, 1500);
  const { displayedText: roleText } = useTypewriter("Graphic Designer & Video Editor", 40, 2800);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Animated background orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <span className="text-lg md:text-xl text-muted-foreground">
                {greeting}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className={greetingDone ? "hidden" : "inline-block w-[2px] h-5 bg-primary ml-1 align-middle"}
                />
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: greetingDone ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold my-4 leading-tight"
            >
              <span className="text-gradient">
                {nameText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className={nameDone ? "hidden" : "inline-block w-[3px] h-12 bg-primary ml-1 align-middle"}
                />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: greetingDone ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-secondary text-foreground text-sm md:text-base font-medium mb-6"
                whileHover={{ scale: 1.05 }}
              >
                {roleText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className={roleText.length >= 31 ? "hidden" : "inline-block w-[2px] h-4 bg-primary ml-1 align-middle"}
                />
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-8"
            >
              I'm a passionate creative professional specializing in crafting stunning visual designs 
              and compelling video content. With a keen eye for detail and a love for storytelling, 
              I transform ideas into captivating visual experiences that leave lasting impressions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center md:items-start gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow px-8">
                  <a href="#works">View My Work</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg">
                  <a href="#contact">Hire Me</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring - animated */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-primary/30"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-primary/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Photo container */}
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-primary p-1"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                  <img 
                    src={sudhanshuPhoto} 
                    alt="Sudhanshu Khande" 
                    className="w-full h-full object-cover object-[center_40%] scale-110"
                  />
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -right-4 top-1/4 px-4 py-2 bg-card border border-border rounded-lg shadow-elegant animate-float"
              >
                <span className="text-sm font-medium">5+ Years Experience</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute -left-4 bottom-1/4 px-4 py-2 bg-card border border-border rounded-lg shadow-elegant"
                style={{ animation: "float 4s ease-in-out 1s infinite" }}
              >
                <span className="text-sm font-medium">50+ Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ y: -3 }}
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
