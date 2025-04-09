
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  const { theme } = useTheme();
  
  return (
    <h2 className={cn(
      "section-heading", 
      theme === "dark" ? "text-white" : "text-navy",
      className
    )}>
      {children}
    </h2>
  );
};

export default SectionHeading;
