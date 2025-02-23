
import { useState } from "react";
import { motion } from "framer-motion";
import { AgentCard } from "@/components/ui/agent-card";
import { cn } from "@/lib/utils";

const categories = ["All", "Content Creation", "Marketing Strategy", "Data Analytics", "Decision Making"];

const agents = [
  {
    title: "Data Whisperer",
    description: "Unlock data insights with AI-powered analysis",
    category: "Data Analytics",
    imagePath: "/lovable-uploads/8fd0ee35-491c-40c7-8e4a-028bdc2ea3ad.png"
  },
  {
    title: "CalendlySocial",
    description: "Streamline your social media calendar with AI-driven scheduling",
    category: "Content Creation",
    imagePath: "/lovable-uploads/c9f4c6a5-97e2-4104-8e77-6c195914e5c4.png"
  },
  {
    title: "Mr. Blogger",
    description: "Craft engaging blog posts effortlessly with AI assistance",
    category: "Content Creation",
    imagePath: "/lovable-uploads/e287c9ec-58c4-4cc9-b80a-48c70c9814cf.png"
  },
  {
    title: "Copywriter",
    description: "Auto-generate compelling social media posts with ease",
    category: "Content Creation",
    imagePath: "/lovable-uploads/1edce8c4-f9c2-4226-b20a-e58c8ea3da40.png"
  },
  {
    title: "Content Idea Seeker",
    description: "Discover viral content ideas with AI-powered insights",
    category: "Content Creation",
    imagePath: "/lovable-uploads/3a05dbb9-2969-4937-a4f4-c122dc1b2ede.png"
  },
  {
    title: "Positioning Master",
    description: "Optimize and validate your marketing positioning with AI",
    category: "Marketing Strategy",
    imagePath: "/lovable-uploads/2bca7ee5-3c0c-4c81-a5e2-fac2a736548b.png"
  },
  {
    title: "Six Thinking Hats",
    description: "Enhance decision-making with a structured approach",
    category: "Decision Making",
    imagePath: "/lovable-uploads/1b3826d5-2512-4379-a37a-797d1af325a9.png"
  },
  {
    title: "Debating Arena",
    description: "Sharpen your ideas with AI-powered debates",
    category: "Decision Making",
    imagePath: "/lovable-uploads/b5a40246-1a1f-413e-a3e7-a5f46910aabc.png"
  }
];

const AgentGarden = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAgents = agents.filter(
    agent => selectedCategory === "All" || agent.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
            Agent Garden
          </span>
        </motion.h1>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-all",
                "border border-white/10 backdrop-blur-sm",
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-500/20 to-blue-500/20 text-white"
                  : "hover:bg-white/5 text-white/70 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Agent Cards Grid */}
        <div className="space-y-8">
          {/* First row - 2/3 + 1/3 layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AgentCard
              {...filteredAgents[0]}
              className="md:col-span-2 h-[400px]"
            />
            <AgentCard
              {...filteredAgents[1]}
              className="h-[400px]"
            />
          </div>

          {/* Second row - 1/3 + 1/3 + 1/3 layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredAgents.slice(2).map((agent) => (
              <AgentCard
                key={agent.title}
                {...agent}
                className="h-[300px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentGarden;
