
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return (
    <h2 className={cn(
      "section-heading text-navy",
      className
    )}>
      {children}
    </h2>
  );
};

export default SectionHeading;
