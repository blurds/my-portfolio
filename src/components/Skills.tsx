import { Code, Database, Headphones, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    title: "CRM & Tools",
    icon: Headphones,
    skills: ["Amadeus", "Salesforce", "Jira"]
  },
  {
    title: "Productivity",
    icon: TrendingUp,
    skills: ["Microsoft Word", "Microsoft Excel", "Google Docs", "Google Sheets"]
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["HTML", "Java"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["SQL"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse set of tools and technologies I use to deliver exceptional results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-gradient-card p-6 rounded-lg shadow-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
