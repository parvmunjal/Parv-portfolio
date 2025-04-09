
import SectionHeading from "./SectionHeading";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeading>Education & Awards</SectionHeading>
        
        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-medium text-navy mb-6">Education</h3>
            
            <div className="space-y-8">
              {/* University */}
              <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h4 className="text-xl font-medium text-navy">Manipal University Jaipur</h4>
                  <p className="text-slate">Jaipur, Rajasthan</p>
                </div>
                <p className="text-highlight mb-1">Bachelor of Technology in Computer and Communication Engineering</p>
                <p className="text-slate">CGPA: 9.34</p>
                <p className="text-slate-light text-sm">2022 - 2026</p>
              </div>
              
            </div>
          </div>
          
          {/* Awards */}
          <div>
            <h3 className="text-2xl font-medium text-navy mb-6">Honors & Awards</h3>
            
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-highlight mr-3 mt-1">▹</span>
                  <div>
                    <p className="text-navy font-medium">DSA Problem Solver</p>
                    <p className="text-slate">Solved 500+ DSA problems across online coding platforms.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-3 mt-1">▹</span>
                  <div>
                    <p className="text-navy font-medium">JP Morgan CFG'24 Hackathon</p>
                    <p className="text-slate">Selected among the top 500 students for the JP Morgan CFG'24 hackathon.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-3 mt-1">▹</span>
                  <div>
                    <p className="text-navy font-medium">Dean's Excellence Award</p>
                    <p className="text-slate">Received for 2nd, 3rd, 4th and 5th semester.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
