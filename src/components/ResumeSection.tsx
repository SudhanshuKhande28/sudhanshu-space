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
  return (
    <section id="resume" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest inline-block">
            Resume
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
            My <span className="text-gradient">Experience</span> & Skills
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience & Education */}
          <div>
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
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors"
                  >
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
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-border"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                    <span className="text-primary text-sm font-medium">{edu.period}</span>
                    <h4 className="text-lg font-semibold mt-1">{edu.title}</h4>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    <p className="text-muted-foreground mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
