
import { useState } from "react";
import { cn } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Visitly",
      title: "Software Engineering Intern",
      period: "Feb 2025 - May 2025",
      location: "San Francisco, California (Remote)",
      responsibilities: [
        "Took full ownership of backend development for a core feature enabling multi-recipient notifications (Email, SMS,Slack), from development to integrations with Slack APIs, Plivo SMS gateway, and AWS SES.",
        "Contributed to frontend development using AngularJS, improving overall usability and maintaining consistency across key modules."
      ]
    },
    {
      company: "RRSC-S, ISRO",
      title: "Project Intern",
      period: "June 2024 - Aug 2024",
      location: "Bengaluru, Karnataka",
      responsibilities: [
        "Revamped the GeoSAM plugin using PyQGIS, enhancing navigation features and user interface; achieved a 40% reduction in user-reported issues.",
        "Automated geospatial data integration, streamlining workflows."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <SectionHeading>Where I've Worked</SectionHeading>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl">
          {/* Tab selector */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  className={cn(
                    "px-4 py-3 text-left border-b-2 md:border-l-2 md:border-b-0 font-mono transition-all whitespace-nowrap",
                    activeTab === index
                      ? "text-highlight border-highlight bg-navy/5"
                      : "text-slate border-gray-200 hover:bg-gray-100 hover:text-navy"
                  )}
                  onClick={() => setActiveTab(index)}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab content */}
          <div className="md:w-3/4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all",
                  activeTab === index ? "block" : "hidden"
                )}
              >
                <h3 className="text-xl font-medium text-navy">
                  {exp.title} <span className="text-highlight">@ {exp.company}</span>
                </h3>
                <p className="text-slate mb-4">{exp.period} | {exp.location}</p>
                <ul className="space-y-2 text-slate">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-highlight mr-2">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
