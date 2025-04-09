
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto">
        <SectionHeading>About Me</SectionHeading>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
          I'm a passionate and detail-oriented Computer and Communication Engineering student with a strong foundation in full-stack development. I thrive on solving complex problems and building scalable, high-quality web applications.          </p>
          <p className="text-lg mb-6">
          With hands-on experience and a proven track record of delivering robust solutions, I bring both technical expertise and a user-focused mindset to every project.
          Currently, I’m a Software Engineering Intern at Visitly, where I contribute to the development of a visitor management system using Spring Boot and AngularJS.          </p>
          
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="md:w-full">
              <h3 className="font-mono text-navy text-xl mb-4">Professional Focus</h3>
              <ul className="list-disc list-inside space-y-2 text-slate">
                <li>Full-stack web application development</li>
                <li>Enterprise-level software architecture</li>
                <li>User-focused application design</li>
                <li>Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
