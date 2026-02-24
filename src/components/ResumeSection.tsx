import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

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
    institution: "",
    period: "2019 - 2023",
    description: "",
  },
];

const skills = [
  { name: "Adobe Photoshop", level: 82 },
  { name: "Adobe Premiere Pro", level: 80 },
  { name: "After Effects", level: 75 },
  { name: "Adobe Illustrator", level: 78 },
  { name: "Canva", level: 85 },
  { name: "Figma", level: 72 },
  { name: "DaVinci Resolve", level: 70 },
];

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 md:py-32">
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
            Resume
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
              {"Experience".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, rotateX: 90 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.05, type: "spring" }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {" & Skills"}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Experience */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  className="p-2 rounded-lg bg-gradient-primary"
                >
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-display font-bold"
                >
                  Experience
                </motion.h3>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    whileHover={{ x: 6, borderColor: "hsl(15 90% 60% / 0.5)" }}
                    className="relative pl-6 border-l-2 border-border transition-colors"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.2, type: "spring" }}
                      className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"
                    />
                    <span className="text-primary text-sm font-medium">{exp.period}</span>
                    <h4 className="text-lg font-semibold mt-1">{exp.title}</h4>
                    <p className="text-muted-foreground text-sm">{exp.company}</p>
                    <p className="text-muted-foreground mt-2">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
                  className="p-2 rounded-lg bg-gradient-primary"
                >
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 }}
                  className="text-2xl font-display font-bold"
                >
                  Education
                </motion.h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                    whileHover={{ x: 6 }}
                    className="relative pl-6 border-l-2 border-border"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 1.1 + index * 0.2, type: "spring" }}
                      className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"
                    />
                    <span className="text-primary text-sm font-medium">{edu.period}</span>
                    <h4 className="text-lg font-semibold mt-1">{edu.title}</h4>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    <p className="text-muted-foreground mt-2">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-2xl font-display font-bold mb-8"
            >
              Technical Skills
            </motion.h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="text-muted-foreground"
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
