import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Senior Graphic Designer",
    company: "Creative Studio",
    period: "2022 - Present",
    description: "Leading visual design for major brand campaigns and motion graphics projects.",
  },
  {
    title: "Video Editor",
    company: "Media Productions",
    period: "2020 - 2022",
    description: "Edited commercials, documentaries, and social media content for various clients.",
  },
  {
    title: "Junior Designer",
    company: "Design Agency",
    period: "2019 - 2020",
    description: "Created print and digital designs for small to medium businesses.",
  },
];

const education = [
  {
    title: "Bachelor's in Visual Communication",
    institution: "Art & Design University",
    period: "2015 - 2019",
    description: "Specialized in digital media and motion graphics.",
  },
];

const skills = [
  { name: "Adobe Photoshop", level: 95 },
  { name: "Adobe Premiere Pro", level: 90 },
  { name: "After Effects", level: 85 },
  { name: "Adobe Illustrator", level: 88 },
  { name: "Figma", level: 82 },
  { name: "DaVinci Resolve", level: 75 },
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
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Resume</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
            My <span className="text-gradient">Experience</span> & Skills
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
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold">Experience</h3>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-border">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                    <span className="text-primary text-sm font-medium">{exp.period}</span>
                    <h4 className="text-lg font-semibold mt-1">{exp.title}</h4>
                    <p className="text-muted-foreground text-sm">{exp.company}</p>
                    <p className="text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-border">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                    <span className="text-primary text-sm font-medium">{edu.period}</span>
                    <h4 className="text-lg font-semibold mt-1">{edu.title}</h4>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    <p className="text-muted-foreground mt-2">{edu.description}</p>
                  </div>
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
            <h3 className="text-2xl font-display font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
