
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
            I'm dedicated to leveraging technical expertise to tackle challenging problems and enhance user experience. Currently working as a Software Engineering Intern at Vastify, where I'm working on visitor management systems using Spring Boot and AngularJS.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="md:w-1/2">
              <h3 className="font-mono text-navy text-xl mb-4">Professional Focus</h3>
              <ul className="list-disc list-inside space-y-2 text-slate">
                <li>Full-stack web application development</li>
                <li>Enterprise-level software architecture</li>
                <li>Geospatial data integration</li>
                <li>User-focused application design</li>
                <li>Performance optimization</li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="font-mono text-navy text-xl mb-4">Current Technologies</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <h4 className="font-medium text-navy">Frontend</h4>
                  <ul className="list-disc list-inside text-slate">
                    <li>React.js</li>
                    <li>AngularJS</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript/TypeScript</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-navy">Backend</h4>
                  <ul className="list-disc list-inside text-slate">
                    <li>Spring Boot</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>Node.js</li>
                    <li>MySQL/MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
