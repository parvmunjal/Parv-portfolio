
import SectionHeading from "./SectionHeading";

const Skills = () => {
  const skillsCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "C", "Python", "Shell Scripting"]
    },
    {
      title: "Frameworks",
      skills: ["Spring Boot", "ReactJS", "AngularJS"]
    },
    {
      title: "Tools/Platforms",
      skills: ["Git", "Docker", "Jenkins", "GitHub Actions", "AWS", "RESTful APIs", "JUnit", "Mockito","JIRA"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <SectionHeading>Technical Skills</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsCategories.map((category, index) => (
            <div key={index} className="bg-navy/5 p-6 rounded-md">
              <h3 className="text-navy font-medium text-xl mb-4 font-mono">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-highlight mr-2">▹</span>
                    <span className="text-slate">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
