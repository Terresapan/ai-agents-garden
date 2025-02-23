
import { cn } from "@/lib/utils";

interface AgentCardProps {
  title: string;
  description: string;
  category: string;
  imagePath: string;
  className?: string;
}

const AgentCard = ({ title, description, category, imagePath, className }: AgentCardProps) => {
  return (
    <div 
      className={cn(
        "group relative rounded-xl overflow-hidden",
        "backdrop-blur-sm border border-white/10",
        "transition-all duration-300 hover:scale-[1.02]",
        "bg-gradient-to-r from-pink-500/10 to-blue-500/10",
        className
      )}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={imagePath} 
          alt={title} 
          className="w-full h-full object-cover opacity-50 transition-opacity group-hover:opacity-60"
        />
      </div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 opacity-50 group-hover:opacity-70 transition-opacity" />
      
      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-end">
        <div className="space-y-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white backdrop-blur-md">
            {category}
          </span>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-white/80">{description}</p>
        </div>
      </div>
    </div>
  );
};

export { AgentCard };
