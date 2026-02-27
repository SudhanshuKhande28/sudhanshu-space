import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import sudhanshuPhoto from "@/assets/sudhanshu-photo.jpg";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useEffect, useRef, useState } from "react";

// Generate random stars
const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  duration: Math.random() * 4 + 2,
  delay: Math.random() * 4,
  opacity: Math.random() * 0.5 + 0.1,
}));

// Shooting stars
const SHOOTING_STARS = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  top: Math.random() * 50,
  left: Math.random() * 50,
  delay: i * 3 + Math.random() * 2,
  duration: Math.random() * 1.5 + 1,
}));

const HeroSection = () => {
  const { displayedText: greeting, isComplete: greetingDone } = useTypewriter("Hello, I'm", 100, 400);
  const { displayedText: nameText, isComplete: nameDone } = useTypewriter("Sudhanshu Khande", 70, 1500);
  const { displayedText: roleText } = useTypewriter("Graphic Designer & Video Editor", 40, 2800);

  // Mouse glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  // Parallax scroll
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mouse cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255,90,0,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-gradient-dark" />

        {/* Deep space gradient */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(15,10,5,0) 0%, rgba(10,5,0,0.8) 100%)"
        }} />

        {/* Stars */}
        {STARS.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 3, star.opacity],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ))}

        {/* Shooting stars */}
        {SHOOTING_STARS.map((s) => (
          <motion.div
            key={s.id}
            className="absolute h-px rounded-full"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: "120px",
              background: "linear-gradient(to right, transparent, rgba(255,120,50,0.8), transparent)",
              rotate: "-35deg",
            }}
            animate={{
              x: [0, 300],
              y: [0, 150],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeIn",
            }}
          />
        ))}

        {/* Large glowing orbs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.18, 0.08], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,90,0,0.3) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.12, 0.05], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,60,0,0.2) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.03, 0.1, 0.03] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,100,20,0.1) 0%, transparent 70%)" }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(255,90,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,90,0,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
      </motion.div>

      {/* Main content with parallax */}
      <motion.div
        className="container mx-auto px-6 relative z-10"
        style={{ y: contentY, opacity }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left order-2 md:order-1">

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                {greeting}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className={greetingDone ? "hidden" : "inline-block w-[2px] h-5 bg-primary ml-1 align-middle"}
                />
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: greetingDone ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold my-4 leading-tight"
            >
              <span className="text-gradient" style={{
                filter: "drop-shadow(0 0 30px rgba(255,90,0,0.3))"
              }}>
                {nameText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className={nameDone ? "hidden" : "inline-block w-[3px] h-12 bg-primary ml-1 align-middle"}
                />
              </span>
            </motion.h1>

            {/* Role badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: greetingDone ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-secondary text-foreground text-sm md:text-base font-medium mb-6 border border-primary/20"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,90,0,0.3)" }}
                style={{ boxShadow: "0 0 10px rgba(255,90,0,0.1)" }}
              >
                {roleText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className={roleText.length >= 31 ? "hidden" : "inline-block w-[2px] h-4 bg-primary ml-1 align-middle"}
                />
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              I'm a passionate creative professional specializing in crafting stunning visual designs
              and compelling video content. With a keen eye for detail and a love for storytelling,
              I transform ideas into captivating visual experiences that leave lasting impressions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center md:items-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90 px-8 relative overflow-hidden"
                  style={{ boxShadow: "0 0 25px rgba(255,90,0,0.4), 0 0 50px rgba(255,90,0,0.1)" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    style={{ skewX: "-20deg" }}
                  />
                  <a href="#works">View My Work</a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/40 hover:border-primary hover:shadow-glow transition-all duration-300"
                >
                  <a href="#contact">Hire Me</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex gap-8 mt-10 justify-center md:justify-start"
            >
              {[{ num: "5+", label: "Years Exp." }, { num: "50+", label: "Projects" }, { num: "20+", label: "Clients" }].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="text-center md:text-left"
                >
                  <div className="text-2xl font-bold text-gradient">{stat.num}</div>
                  <div className="text-xs text-muted-foreground tracking-wider uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-6 rounded-full"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ background: "radial-gradient(circle, rgba(255,90,0,0.15) 0%, transparent 70%)" }}
              />

              {/* Rotating rings */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{
                  borderStyle: "dashed",
                }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-primary/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-2 rounded-full border border-primary/30"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Orbiting dot */}
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-primary"
                style={{
                  top: "50%",
                  left: "50%",
                  translateX: "-50%",
                  translateY: "-50%",
                  boxShadow: "0 0 10px rgba(255,90,0,0.8)",
                }}
                animate={{
                  rotate: 360,
                  x: [0, 160, 0, -160, 0],
                  y: [-160, 0, 160, 0, -160],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />

              {/* Photo */}
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-primary p-1"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ boxShadow: "0 0 40px rgba(255,90,0,0.2), 0 0 80px rgba(255,90,0,0.05)" }}
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
                whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(255,90,0,0.2)" }}
                className="absolute -right-6 top-1/4 px-4 py-2 bg-card border border-border rounded-lg cursor-default"
                style={{
                  animation: "float 4s ease-in-out infinite",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
                }}
              >
                <span className="text-sm font-medium">⚡ 5+ Years Experience</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(255,90,0,0.2)" }}
                className="absolute -left-6 bottom-1/4 px-4 py-2 bg-card border border-border rounded-lg cursor-default"
                style={{
                  animation: "float 4s ease-in-out 1s infinite",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
                }}
              >
                <span className="text-sm font-medium">🎨 50+ Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ y: -3 }}
          >
            <span className="text-xs tracking-widest uppercase">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
