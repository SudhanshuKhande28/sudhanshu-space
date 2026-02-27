import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    title: "Content Creator & Video Editor",
    company: "The Focal Point (Self-owned)",
    period: "2025 - Present",
    description: "Running an independent Instagram creative channel focused on video edits and visual storytelling. Responsible for conceptualizing, shooting, editing, and publishing creative content consistently.",
  },
  {
    title: "Junior IT Engineer & Multimedia Designer",
    company: "Kreative Monks",
    period: "Jan 2023 - Aug 2023",
    description: "Worked at Kreative Monks, a full-service creative and technology firm. Responsibilities included managing client websites, creating graphic content for digital campaigns, editing video advertisements, and providing technical support for design projects.",
  },
  {
    title: "Graphic Designer & Video Editor",
    company: "Vizora Studio",
    period: "Jun 2021 - Dec 2022",
    description: "Worked as a creative designer at Vizora Studio, a digital media agency specializing in brand identity and social media content. Responsibilities included designing logos, creating social media posts, editing promotional videos, and collaborating with clients to deliver creative solutions.",
  },
];

const education = [
  {
    title: "B.E in Information Technology",
    institution: "Pune University",
    period: "2019 - 2023",
    description: "Studied core computer science subjects including networking, software engineering, and multimedia systems.",
  },
];

const skills = [
  { name: "Adobe Photoshop", level: 82, color: "#ff6b35" },
  { name: "Adobe Premiere Pro", level: 80, color: "#ff5a00" },
  { name: "After Effects", level: 75, color: "#ff8c42" },
  { name: "Adobe Illustrator", level: 78, color: "#ff6b35" },
  { name: "Canva", level: 85, color: "#ff5a00" },
  { name: "Figma", level: 72, color: "#ff8c42" },
  { name: "DaVinci Resolve", level: 70, color: "#ff6b35" },
];

const SkillBar = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <motion.span
          className="text-primary font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: `linear-gradient(to right, #ff5a00, #ffaa00)` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
        >
          {/* Shimmer effect on skill bar */}
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            style={{ skewX: "-20deg" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const TimelineItem = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-6 border-l-2 border-border group"
      whileHover={{ x: 6 }}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"
        whileHover={{ scale: 1.5 }}
        style={{ boxShadow: "0 0 10px rgba(255,90,0,0.5)" }}
      />

      {/* Hover glow on left border */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary origin-top"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
      />

      <motion.span
        className="text-primary text-sm font-semibold tracking-wide"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.15 + 0.2 }}
      >
        {item.period}
      </motion.span>

      <h4 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors duration-300">
        {item.title}
      </h4>

      <p className="text-primary/70 text-sm font-medium">
        {item.company || item.institution}
      </p>

      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
};

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 md:py-32 relative overflow-hidden">

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,90,0,0.2) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,90,0,0.15) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-6" ref={ref}>

        {/* Section header */}
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
            transition={{ duration: 0.4 }}
          >
            Resume
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
            My <span className="text-gradient" style={{ filter: "drop-shadow(0 0 20px rgba(255,90,0,0.3))" }}>Experience</span> & Skills
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-primary mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Experience & Education */}
          <div>
            {/* Experience */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  className="p-2 rounded-lg bg-gradient-primary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{ boxShadow: "0 0 15px rgba(255,90,0,0.3)" }}
                >
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold">Experience</h3>
              </div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <TimelineItem key={index} item={exp} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  className="p-2 rounded-lg bg-gradient-primary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{ boxShadow: "0 0 15px rgba(255,90,0,0.3)" }}
                >
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold">Education</h3>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <TimelineItem key={index} item={edu} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-display font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
            </div>

            {/* Tools grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10"
            >
              <h4 className="text-lg font-semibold mb-4 text-muted-foreground uppercase tracking-wider text-sm">Tools & Software</h4>
              <div className="flex flex-wrap gap-3">
                {["Photoshop", "Premiere Pro", "After Effects", "Illustrator", "Figma", "Canva", "DaVinci Resolve", "VS Code"].map((tool, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.06 }}
                    whileHover={{ scale: 1.08, boxShadow: "0 0 12px rgba(255,90,0,0.3)" }}
                    className="px-3 py-1.5 rounded-full bg-secondary border border-border text-sm font-medium cursor-default transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
