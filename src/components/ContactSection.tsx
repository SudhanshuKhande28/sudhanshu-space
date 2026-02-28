import { useState, useRef } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  { icon: Mail, label: "Email", value: "skhande0944@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9130157317" },
  { icon: MapPin, label: "Location", value: "Pune, India" },
];

// Confetti particle
const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 8 + 4,
  color: ["#ff5a00", "#ffaa00", "#ff8c00", "#ffffff", "#ffdd99", "#ff6b35"][Math.floor(Math.random() * 6)],
  rotation: Math.random() * 360,
  duration: Math.random() * 1.5 + 1,
  delay: Math.random() * 0.6,
}));

// Play success sound
const playSuccessSound = () => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 — happy chord
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = freq;
      osc.type = "sine";
      gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.12);
      gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + i * 0.12 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.5);
      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 0.5);
    });
  } catch (e) {}
};

// Success overlay
const SuccessOverlay = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      {/* Confetti particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-sm pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: "-10px",
            width: p.size,
            height: p.size,
            background: p.color,
            rotate: p.rotation,
          }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: [p.rotation, p.rotation + 360],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: p.duration + 1,
            delay: p.delay,
            ease: "easeIn",
          }}
        />
      ))}

      {/* Main card */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 60 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: -40 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        className="relative z-10 text-center px-10 py-12 rounded-3xl max-w-md mx-4"
        style={{
          background: "linear-gradient(135deg, #0f0a05 0%, #1c0e00 100%)",
          border: "1px solid rgba(255,90,0,0.4)",
          boxShadow: "0 0 80px rgba(255,90,0,0.2), inset 0 0 60px rgba(255,90,0,0.05)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Grid background */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,90,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,90,0,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />

        {/* Glow orb */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
          background: "radial-gradient(circle at 50% 30%, rgba(255,90,0,0.12) 0%, transparent 70%)"
        }} />

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2" style={{ borderColor: "rgba(255,90,0,0.5)" }} />
        <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2" style={{ borderColor: "rgba(255,90,0,0.5)" }} />
        <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2" style={{ borderColor: "rgba(255,90,0,0.5)" }} />
        <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2" style={{ borderColor: "rgba(255,90,0,0.5)" }} />

        <div className="relative z-10">
          {/* Animated check icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              background: "linear-gradient(135deg, #ff5a00, #ffaa00)",
              boxShadow: "0 0 40px rgba(255,90,0,0.5)",
            }}
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>

          {/* Sparkles around icon */}
          {["top-0 left-1/2", "top-4 right-8", "top-4 left-8", "bottom-8 right-6", "bottom-8 left-6"].map((pos, i) => (
            <motion.div
              key={i}
              className={`absolute ${pos}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4" style={{ color: "#ffaa00" }} />
            </motion.div>
          ))}

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-display font-bold mb-3 text-white"
          >
            Message Received! 🎉
          </motion.h3>

          {/* Sweet message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base leading-relaxed mb-2"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Thank you for reaching out! ✨
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-sm leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Your message just landed safely in my inbox. I read every message personally and will get back to you very soon. Let's create something amazing together! 🚀
          </motion.p>

          {/* Animated divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="h-px mx-auto mb-6 rounded-full"
            style={{ background: "linear-gradient(to right, transparent, #ff5a00, transparent)" }}
          />

          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            onClick={onClose}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,90,0,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full text-sm font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #ff5a00, #ffaa00)",
              boxShadow: "0 0 20px rgba(255,90,0,0.4)",
            }}
          >
            Awesome, Thanks! 🙌
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    try {
      const response = await fetch("https://formspree.io/f/xqedgbge", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        form.reset();
        playSuccessSound();
        setTimeout(() => setShowSuccess(true), 100);
      }
    } catch (error) {}
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Success overlay */}
      <AnimatePresence>
        {showSuccess && <SuccessOverlay onClose={() => setShowSuccess(false)} />}
      </AnimatePresence>

      <section id="contact" className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest inline-block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
              Let's <span className="text-gradient">Work Together</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Have a project in mind? Let's discuss how we can work together
                to bring your vision to life.
              </p>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 cursor-default hover:translate-x-2 transition-transform duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-background border-border focus:border-primary transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="bg-background border-border focus:border-primary transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  name="subject"
                  placeholder="Project inquiry"
                  required
                  className="bg-background border-border focus:border-primary transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-background border-border focus:border-primary resize-none transition-all duration-300"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
                  style={{ boxShadow: "0 0 20px rgba(255,90,0,0.3)" }}
                >
                  {isSubmitting ? (
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      Sending...
                    </motion.span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
