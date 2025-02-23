
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center px-4 max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold dark:text-white">
          Welcome to Your Next{" "}
          <span className="text-blue-500 dark:text-blue-400">Amazing</span>{" "}
          Project
        </h1>
        
        <p className="text-lg md:text-xl dark:text-neutral-200 max-w-2xl">
          Start building something incredible with modern tools and stunning design.
          Your journey to creating remarkable applications begins here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <RainbowButton>
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </RainbowButton>
          
          <Button 
            variant="outline"
            size="lg"
            className="rounded-full px-8"
          >
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm dark:bg-zinc-900/50"
            >
              <h3 className="text-xl font-semibold dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

const features = [
  {
    title: "Modern Stack",
    description: "Built with React, TypeScript, and Tailwind CSS for a powerful development experience.",
  },
  {
    title: "Beautiful Design",
    description: "Stunning aurora effects and smooth animations create an engaging user experience.",
  },
  {
    title: "Ready to Scale",
    description: "Optimized performance and component-based architecture for easy scaling.",
  },
];

export default Index;
