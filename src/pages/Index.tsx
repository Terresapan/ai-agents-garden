import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { StarBorder } from "@/components/ui/star-border";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { GlareCard } from "@/components/ui/glare-card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-fuchsia-500">Terresa Pan</h2>
          <div className="flex gap-4">
            <StarBorder>
              Agents
            </StarBorder>
            <StarBorder>
              Blogs
            </StarBorder>
          </div>
        </div>
      </div>

      {/* Hero Section with Aurora Background */}
      <AuroraBackground>
        <div className="h-screen flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <img 
                src="/lovable-uploads/6912a4d2-a538-4eee-a561-ce397129c20e.png"
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-fuchsia-500/20"
              />
              <div className="absolute inset-0 rounded-full bg-fuchsia-500/10 backdrop-blur-sm"></div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold dark:text-white mb-6">
              Welcome to Your Next{" "}
              <span className="text-fuchsia-500">Amazing</span>{" "}
              Project
            </h1>
            
            <p className="text-lg md:text-xl dark:text-neutral-200 max-w-2xl mx-auto mb-8">
              Start building something incredible with modern tools and stunning design.
              Your journey to creating remarkable applications begins here.
            </p>

            <RainbowButton>
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </RainbowButton>
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Rest of the content */}
      <div className="bg-background">
        {/* 3D Interactive Section */}
        <div className="max-w-7xl mx-auto px-4 py-24">
          <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            
            <div className="flex h-full">
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
        </div>

        {/* Featured Agents Section */}
        <div className="max-w-7xl mx-auto px-4 pb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center dark:text-white">
            Featured <span className="text-fuchsia-500">Agents</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center max-w-6xl mx-auto">
            <GlareCard className="flex flex-col items-center justify-center">
              <img 
                className="h-full w-full absolute inset-0 object-cover"
                src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center">
              <img 
                className="h-full w-full absolute inset-0 object-cover"
                src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center">
              <img 
                className="h-full w-full absolute inset-0 object-cover"
                src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </GlareCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
