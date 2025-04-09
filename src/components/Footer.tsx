
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="py-6 bg-navy text-white">
      <div className="container mx-auto text-center">
        <p className="text-slate-lighter">
          Designed & Built by Parv Munjal
        </p>
        <p className="text-slate-lighter text-sm mt-2">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
