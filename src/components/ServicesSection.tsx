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
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest inline-block">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
            My <span className="text-gradient">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-card hover:-translate-y-2 hover:border-primary/50 cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 group-hover:text-gradient transition-all duration-300">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
