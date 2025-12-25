import profileImage from "@/assets/profile.png";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden px-4 py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float delay-300" />
      </div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative animate-scale-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-primary p-1 shadow-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-card">
                <img 
                  src={profileImage} 
                  alt="Jason Durana Lomibao" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-50" />
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-2 animate-fade-in">Hello, I'm</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              Jason Durana <span className="text-gradient">Lomibao</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up delay-100">
              Customer Service Professional
            </p>
            <p className="text-muted-foreground max-w-xl mb-8 animate-slide-up delay-200 leading-relaxed">
              Experienced in customer support, technical service, and sales across travel, 
              appliance, technology, and renewable energy industries. Skilled in handling 
              customer inquiries via multiple channels.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-slide-up delay-300">
              <a 
                href="mailto:jasonprimo2@gmail.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                jasonprimo2@gmail.com
              </a>
              <a 
                href="tel:+639923146761" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +639923146761
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Marikina City, Philippines
              </span>
            </div>
            
            {/* CTA */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-slide-up delay-400">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
