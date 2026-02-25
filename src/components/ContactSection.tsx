import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "skhande0944@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9130157317" },
  { icon: MapPin, label: "Location", value: "Pune, India" },
];

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! I'll get back to you soon.");
    }, 1000);
  };

  return (
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
                  placeholder="Your name"
                  required
                  className="bg-background border-border focus:border-primary transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-background border-border focus:border-primary transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Input
                placeholder="Project inquiry"
                required
                className="bg-background border-border focus:border-primary transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="bg-background border-border focus:border-primary resize-none transition-all duration-300"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
            >
              {isSubmitting ? "Sending..." : (
                <>
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
