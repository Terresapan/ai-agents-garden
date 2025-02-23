import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { StarBorder } from "@/components/ui/star-border";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { GlareCard } from "@/components/ui/glare-card";
import { ArrowRight } from "lucide-react";
import { GlobeDemo } from "@/components/ui/code.demo";
import { Input } from "@/components/ui/input";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ButtonColorful } from "@/components/ui/button-colorful";

const Index = () => {
  const scrollToIntro = () => {
    const introSection = document.getElementById('intro-section');
    if (introSection) {
      introSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-blue-500">Artful Geek</h2>
          <div className="flex gap-4">
            <StarBorder>
              <span className="hover:text-fuchsia-500 transition-colors">Agent Garden</span>
            </StarBorder>
            <StarBorder onClick={scrollToIntro} className="cursor-pointer">
              <span className="hover:text-fuchsia-500 transition-colors">
                Get in Touch
              </span>
            </StarBorder>
          </div>
        </div>
      </div>

      {/* Hero Section with Aurora Background */}
      <AuroraBackground>
        <div className="h-screen flex items-center justify-center px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          ease: "easeOut"
        }} className="text-center max-w-4xl mx-auto">
            <div className="w-32 h-32 mx-auto mb-8">
              <img src="/lovable-uploads/6912a4d2-a538-4eee-a561-ce397129c20e.png" alt="Profile" className="w-full h-full rounded-full object-cover border-2 border-fuchsia-500/20" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Welcome to Your Next </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-blue-500">Amazing</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"> Project</span>
            </h1>
            
            <p className="text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 max-w-2xl mx-auto mb-8">
              Start building something incredible with modern tools and stunning design.
              Your journey to creating remarkable applications begins here.
            </p>

            <RainbowButton>
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </RainbowButton>
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Main Content */}
      <div className="flex-grow bg-background">
        {/* 3D Interactive Section */}
        <div className="max-w-7xl mx-auto px-4 py-24">
          <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            
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
                <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
              </div>
            </div>
          </Card>
        </div>

        {/* Featured Agents Section */}
        <div className="max-w-7xl mx-auto px-4 pb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Featured </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-fuchsia-500">Agents</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center max-w-6xl mx-auto">
            <div className="relative w-full">
              <GlareCard className="flex flex-col items-center justify-center">
                <img className="h-full w-full absolute inset-0 object-cover opacity-50" src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI Agent" />
                <div className="relative z-10 p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-white">Data Whisperer</h3>
                  <p className="text-sm text-gray-200">Your AI-powered data scientist</p>
                </div>
              </GlareCard>
            </div>
            
            <div className="relative w-full">
              <GlareCard className="flex flex-col items-center justify-center">
                <img className="h-full w-full absolute inset-0 object-cover opacity-50" src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI Agent" />
                <div className="relative z-10 p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-white">CalendlySocial</h3>
                  <p className="text-sm text-gray-200">Automate your social media calendar with AI-powered scheduling</p>
                </div>
              </GlareCard>
            </div>
            
            <div className="relative w-full">
              <GlareCard className="flex flex-col items-center justify-center">
                <img className="h-full w-full absolute inset-0 object-cover opacity-50" src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI Agent" />
                <div className="relative z-10 p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-white">Debating Arena</h3>
                  <p className="text-sm text-gray-200">Challenge your ideas with AI-powered debate</p>
                </div>
              </GlareCard>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="max-w-7xl mx-auto px-4 pb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">About </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-fuchsia-500">Me</span>
          </h2>
        </div>

        {/* AI Consultant Introduction Section */}
        <div className="max-w-7xl mx-auto px-4 pb-24" id="intro-section">
          <Card className="w-full bg-black/[0.96] relative overflow-hidden transform transition-transform duration-300 hover:scale-102">
            <div className="flex flex-col-reverse md:flex-row items-center p-8 gap-8">
              {/* Content Section */}
              <div className="w-full md:w-2/3 relative z-10">
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
                
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">Terresa Pan</h2>
                
                <p className="text-lg text-neutral-300 mb-6">
                  With over a decade of experience in AI and machine learning, I specialize in helping businesses leverage cutting-edge technology to solve complex problems and drive innovation. My approach combines technical expertise with practical business acumen to deliver results that matter.
                </p>
                
                <div className="space-y-4 text-neutral-400">
                  <p>• Expert in AI Strategy Development and Implementation</p>
                  <p>• Specialized in Machine Learning Solutions</p>
                  <p>• Proven Track Record in Digital Transformation</p>
                </div>

                <div className="mt-8">
                  <a href="https://calendly.com/terresap2010/30min" target="_blank" rel="noopener noreferrer">
                    <RainbowButton>
                      Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </RainbowButton>
                  </a>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/3">
                <img src="/lovable-uploads/b1ad035f-078b-47d9-a438-e756b6563a50.png" alt="AI Consultant" className="w-full h-[400px] object-cover rounded-lg" />
              </div>
            </div>
          </Card>
        </div>

        {/* Globe and Contact Form Section */}
        <div className="w-full py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Globe on the left */}
              <div>
                <GlobeDemo />
              </div>

              {/* Contact form on the right */}
              <div className="relative rounded-lg overflow-hidden">
                <div className="absolute inset-0 -z-10">
                  <GlowingEffect 
                    disabled={false}
                    glow={true}
                    spread={60}
                    blur={20}
                    borderWidth={2}
                    proximity={100}
                    inactiveZone={0.4}
                  />
                </div>
                <div className="relative bg-black/[0.96] rounded-lg p-8 border border-white/10">
                  <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
                    Subscribe to Newsletters
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        placeholder="Name"
                        className="bg-background/50 border-white/10"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="bg-background/50 border-white/10"
                      />
                    </div>
                    <div>
                      <ButtonColorful 
                        type="submit"
                        label="Submit"
                        className="w-full"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/[0.96] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-4">
              <h3 className="text-xl font-semibold text-fuchsia-500">Terresa Pan</h3>
              <span className="text-neutral-400">|</span>
              <span className="text-neutral-400">AI Consultant</span>
            </div>
            <div className="flex gap-6 text-neutral-400">
              <a href="#" className="hover:text-fuchsia-500 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-fuchsia-500 transition-colors">Twitter</a>
              <a href="#" className="hover:text-fuchsia-500 transition-colors">Email</a>
            </div>
            <div className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
