
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto">
        <div className="max-w-3xl animate-fadeIn">
          <p className="font-mono text-highlight mb-4">Hi, my name is</p>
          <h1 className="text-navy font-bold mb-4">
            Parv Munjal.
          </h1>
          <h2 className="text-slate text-3xl md:text-4xl lg:text-5xl mb-6">
            I build scalable web applications.
          </h2>
          <p className="text-slate text-lg mb-8 max-w-xl">
            I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building scalable applications at{" "}
            <a href="#experience" className="text-highlight hover:underline">
              Vastify
            </a>
            .
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
