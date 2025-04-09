
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={cn(
      "py-6",
      theme === "dark" ? "bg-navy-light text-white" : "bg-navy text-white"
    )}>
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
