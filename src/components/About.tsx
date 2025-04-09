
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto">
        <SectionHeading>About Me</SectionHeading>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            I'm a passionate and detail-oriented Computer and Communication Engineering graduate with a strong foundation in full-stack development. Known for complex problem-solving abilities and a commitment to developing scalable applications, I've demonstrated through hands-on experience my skill in building robust solutions with a proven track record of delivering high-quality projects.
          </p>
          <p className="text-lg mb-6">
            I'm dedicated to leveraging technical expertise to tackle challenging problems and enhance user experience. Currently working as a Software Engineering Intern at Visitly, where I'm working on visitor management systems using Spring Boot and AngularJS.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="md:w-full">
              <h3 className="font-mono text-navy text-xl mb-4">Professional Focus</h3>
              <ul className="list-disc list-inside space-y-2 text-slate">
                <li>Full-stack web application development</li>
                <li>Enterprise-level software architecture</li>
                <li>Geospatial data integration</li>
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
