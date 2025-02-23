import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { StarBorder } from "@/components/ui/star-border";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight } from "lucide-react";
const Index = () => {
  return <AuroraBackground>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-fuchsia-500">Terresa Pan</h2>
          <div className="flex gap-4">
            <StarBorder>
              Work Experience
            </StarBorder>
            <StarBorder>
              Get in Touch
            </StarBorder>
          </div>
        </div>
      </div>

      {/* Main content with top padding to account for fixed header */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 1,
      ease: "easeOut"
    }} className="relative flex flex-col gap-6 items-center justify-center px-4 max-w-4xl mx-auto text-center pt-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold dark:text-white">
          Welcome to Your Next{" "}
          <span className="text-fuchsia-500">Amazing</span>{" "}
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

        <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden mt-16">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          
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
              <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
            </div>
          </div>
        </Card>
      </motion.div>
    </AuroraBackground>;
};
export default Index;