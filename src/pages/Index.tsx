
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { StarBorder } from "@/components/ui/star-border";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
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
          
          <StarBorder>
            Learn More
          </StarBorder>
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

        <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden mt-16">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex h-full flex-col md:flex-row">
            {/* Left content */}
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Interactive 3D
              </h1>
              <p className="mt-4 text-neutral-300 max-w-lg">
                Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
                that capture attention and enhance your design.
              </p>
            </div>

            {/* Right content */}
            <div className="flex-1 relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
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
