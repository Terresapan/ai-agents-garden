import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Linkedin, Github, Youtube } from "lucide-react";
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
import { ButtonColorful } from "@/components/ui/button-colorful";
import { Link } from "react-router-dom";
import { SharedHeader } from "@/components/ui/shared-header";
import { SharedFooter } from "@/components/ui/shared-footer";
const Index = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollToIntro) {
      const introSection = document.getElementById('intro-section');
      if (introSection) {
        introSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  return <div className="min-h-screen flex flex-col">
      <SharedHeader />

      {/* Main Content */}
      <div className="flex-grow bg-background">
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

              <RainbowButton onClick={() => window.location.href = '/agent-garden'}>
                Explore Agent Garden <ArrowRight className="ml-2 h-4 w-4" />
              </RainbowButton>
            </motion.div>
          </div>
        </AuroraBackground>

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
            <div className="relative w-full transform transition-transform duration-300 hover:-translate-y-1">
              <a href="https://mrdatawhisperer.streamlit.app/" target="_blank" rel="noopener noreferrer">
                <GlareCard className="flex flex-col items-center justify-center">
                  <img className="h-full w-full absolute inset-0 object-cover opacity-50" src="/lovable-uploads/8fd0ee35-491c-40c7-8e4a-028bdc2ea3ad.png" alt="Data Whisperer" />
                  <div className="relative z-10 p-6 text-center">
                    <h3 className="text-xl font-bold mb-2 text-white">Data Whisperer</h3>
                    <p className="text-sm text-gray-200">Unlock data insights with AI-powered analysis</p>
                  </div>
                </GlareCard>
              </a>
            </div>
            
            <div className="relative w-full transform transition-transform duration-300 hover:-translate-y-1">
              <a href="https://calenderly.streamlit.app/" target="_blank" rel="noopener noreferrer">
                <GlareCard className="flex flex-col items-center justify-center">
                  <img className="h-full w-full absolute inset-0 object-cover opacity-50" src="/lovable-uploads/c9f4c6a5-97e2-4104-8e77-6c195914e5c4.png" alt="CalendlySocial" />
                  <div className="relative z-10 p-6 text-center">
                    <h3 className="text-xl font-bold mb-2 text-white">CalendlySocial</h3>
                    <p className="text-sm text-gray-200">Streamline your social media calendar with AI-driven scheduling</p>
                  </div>
                </GlareCard>
              </a>
            </div>
            
            <div className="relative w-full transform transition-transform duration-300 hover:-translate-y-1">
              <a href="https://debating-arena.streamlit.app/" target="_blank" rel="noopener noreferrer">
                <GlareCard className="flex flex-col items-center justify-center">
                  <img className="h-full w-full absolute inset-0 object-cover opacity-50" src="/lovable-uploads/b5a40246-1a1f-413e-a3e7-a5f46910aabc.png" alt="Debating Arena" />
                  <div className="relative z-10 p-6 text-center">
                    <h3 className="text-xl font-bold mb-2 text-white">Debating Arena</h3>
                    <p className="text-sm text-gray-200">Sharpen your ideas with AI-powered debates</p>
                  </div>
                </GlareCard>
              </a>
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
              <div className="w-full md:w-2/3 relative z-10 px-[16px]">
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
                
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4 px-[8px]">Terresa Pan</h2>
                
                <div className="flex gap-4 mb-6 px-[8px]">
                  <a href="https://www.linkedin.com/in/terresa-pan-292443245/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-fuchsia-500 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/Terresapan?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-fuchsia-500 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://www.youtube.com/@Terresa_P" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-fuchsia-500 transition-colors">
                    <Youtube size={20} />
                  </a>
                </div>

                <p className="text-lg text-neutral-300 mb-6 px-[8px]">
                  With over a decade of experience in AI and machine learning, I specialize in helping businesses leverage cutting-edge technology to solve complex problems and drive innovation. My approach combines technical expertise with practical business acumen to deliver results that matter.
                </p>
                
                <div className="space-y-4 text-neutral-400 px-[8px]">
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
              <div className="relative rounded-lg">
                <div className="relative rounded-lg p-8 border border-white/10 bg-black/[0.96] 
                              transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,70,239,0.5),0_0_40px_rgba(30,174,219,0.3)] 
                              hover:border-fuchsia-500/50">
                  <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
                    Subscribe to Newsletters
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <Input type="text" placeholder="Name" className="bg-background/50 border-white/10" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" className="bg-background/50 border-white/10" />
                    </div>
                    <div>
                      <ButtonColorful type="submit" label="Submit" className="w-full" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SharedFooter />
    </div>;
};
export default Index;