import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "TTEC",
    role: "CSR II - Qantas Holidays & Jetstar Holidays",
    period: "July 2022 - November 2025",
    responsibilities: [
      "Assisted customers with booking accommodations, transportation, and travel products",
      "Processed reservations and payments for flights, hotels, and tours",
      "Recommended travel options and add-ons such as insurance and seat upgrades",
      "Managed post-booking requests including changes, confirmations, and cancellations"
    ]
  },
  {
    company: "Transcom",
    role: "CSR - Samsung",
    period: "February 2021 - April 2021",
    responsibilities: [
      "Diagnosed appliance issues and provided repair solutions",
      "Estimated costs for maintenance and repairs",
      "Delivered technical guidance and troubleshooting assistance to customers"
    ]
  },
  {
    company: "SPI CRM",
    role: "CSR/TSR - eHost / Endurance",
    period: "May 2017 - July 2017",
    responsibilities: [
      "Provided website and software support to clients",
      "Used web development tools to assist in site maintenance and updates",
      "Coordinated with technical teams to address issues and improve functionality",
      "Ensured websites met quality and compatibility standards"
    ]
  },
  {
    company: "Solar Inc.",
    role: "Customer Service / Sales",
    period: "August 2014 - October 2016",
    responsibilities: [
      "Consulted with customers to assess solar energy needs",
      "Recommended suitable solar systems and equipment",
      "Prepared cost-benefit analyses and proposals",
      "Followed up with leads to close sales and ensure satisfaction"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-card/50" id="experience">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering exceptional customer service across multiple industries
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-1/2 mt-6 shadow-glow" />
              
              {/* Content */}
              <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <div className="bg-gradient-card p-6 rounded-lg shadow-card border border-border/50 hover:border-primary/30 transition-colors">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-primary font-semibold">{exp.company}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{exp.role}</h3>
                  <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 ${index % 2 === 0 ? 'md:order-last' : ''}`} />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
