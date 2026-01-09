import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Play } from "lucide-react";

const categories = ["All", "Branding", "Video", "UI/UX", "Motion"];

const works = [
  {
    title: "Brand Identity Design",
    category: "Branding",
    image: "🎨",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Product Commercial",
    category: "Video",
    image: "🎬",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Mobile App Design",
    category: "UI/UX",
    image: "📱",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Logo Animation",
    category: "Motion",
    image: "✨",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Corporate Video",
    category: "Video",
    image: "🎥",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Website Redesign",
    category: "UI/UX",
    image: "💻",
    color: "from-yellow-500/20 to-orange-500/20",
  },
];

const WorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <section id="works" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
            My <span className="text-gradient">Recent Works</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Works Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${work.color} flex items-center justify-center`}>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {work.image}
                </span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-display font-bold mb-2">{work.title}</h3>
                  <span className="text-primary text-sm">{work.category}</span>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <button className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform">
                      {work.category === "Video" || work.category === "Motion" ? (
                        <Play className="w-5 h-5" />
                      ) : (
                        <ExternalLink className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
