import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    school: "ICCT College",
    degree: "Bachelor of Science in Information Technology (BSIT)",
    period: "2024 - Present",
    current: true
  },
  {
    school: "STI College Marikina",
    degree: "Information Technology Studies",
    period: "2013 - 2014",
    current: false
  },
  {
    school: "AMA College University",
    degree: "Computer Studies",
    period: "2012 - 2013",
    current: false
  }
];

const Education = () => {
  return (
    <section className="py-20 px-4 bg-card/50" id="education">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in Information Technology
          </p>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="group bg-gradient-card p-6 rounded-lg shadow-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold flex items-center gap-2">
                      {edu.school}
                      {edu.current && (
                        <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground ml-16 md:ml-0">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
