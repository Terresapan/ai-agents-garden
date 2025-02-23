
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
    imagePath: "/lovable-uploads/8fd0ee35-491c-40c7-8e4a-028bdc2ea3ad.png"
  },
  {
    title: "Mr. Blogger",
    description: "Craft engaging blog posts effortlessly with AI assistance",
    category: "Content Creation",
    imagePath: "/lovable-uploads/8fd0ee35-491c-40c7-8e4a-028bdc2ea3ad.png"
  },
  {
    title: "Copywriter",
    description: "Auto-generate compelling social media posts with ease",
    category: "Content Creation",
    imagePath: "/lovable-uploads/8fd0ee35-491c-40c7-8e4a-028bdc2ea3ad.png"
  },
  {
    title: "Content Idea Seeker",
    description: "Discover viral content ideas with AI-powered insights",
    category: "Content Creation",
    imagePath: "/lovable-uploads/8fd0ee35-491c-40c7-8e4a-028bdc2ea3ad.png"
  },
  {
    title: "Positioning Master",
    description: "Optimize and validate your marketing positioning with AI",
    category: "Marketing Strategy",
    imagePath: "/lovable-uploads/8fd0ee35-491c-40c7-8e4a-028bdc2ea3ad.png"
  },
  {
    title: "Six Thinking Hats",
    description: "Enhance decision-making with a structured approach",
    category: "Decision Making",
    imagePath: "/lovable-uploads/8fd0ee35-491c-40c7-8e4a-028bdc2ea3ad.png"
  },
  {
    title: "Debating Arena",
    description: "Sharpen your ideas with AI-powered debates",
    category: "Decision Making",
    imagePath: "/lovable-uploads/8fd0ee35-491c-40c7-8e4a-028bdc2ea3ad.png"
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
