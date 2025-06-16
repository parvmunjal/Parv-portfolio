
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "CampusConnect",
      description: "A full-stack event platform for creating, managing, and attending campus events",
      technologies: ["Spring Boot", "Spring Security", "React JS", "MySQL",  "Render", "Netlify", "GitHub Actions"],
      details: [
      "Designed and implemented a full stack campus event management platform with secure JWT authentication.",
      "Built role based dashboards for users, organizers, and admin enabling event exploration, registration, venue scheduling, analytics, and administrative approvals.",
 "Automated deployment using CI/CD pipelines via GitHub Actions, deployed across Netlify and Render.",
        "Implemented a registration system with email notifications for enhanced user engagement."
      ],
      liveDemo:"https://campusconnectcc.netlify.app"
    },
    {
      title: "VibeHub",
      description: "A social media platform with personalized feeds, multimedia support, and customizable themes",
      technologies: ["Spring Boot", "Spring Security", "MongoDB", "React JS", "HTML", "CSS"],
      details: [
        "Developed a social media platform with personalized feeds, real-time notifications, multimedia support, and customizable themes for user profiles."
      ]
    },
    {
      title: "Blog Buddy",
      description: "An AI-powered blog creation tool with topic suggestions and draft assistance",
      technologies: ["Spring Boot", "Spring Security", "MySQL", "Llama2 model (NLP)", "HTML", "CSS"],
      details: [
        "Built an AI-powered blog creation tool with topic suggestions and draft assistance via the Llama2 NLP model."
      ]
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="container mx-auto">
        <SectionHeading>Featured Projects</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              details={project.details}
              liveDemo={project.liveDemo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
