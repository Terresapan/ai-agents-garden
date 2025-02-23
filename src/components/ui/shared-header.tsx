
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./button";
import { StarBorder } from "./star-border";

export const SharedHeader = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollToIntro: true } });
    } else {
      const introSection = document.getElementById('intro-section');
      if (introSection) {
        introSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-blue-500">
          Artful Geek
        </Link>
        <div className="flex items-center gap-6">
          <StarBorder 
            as={Link} 
            to="/agent-garden"
            color="hsl(var(--fuchsia-500))"
            speed="4s"
            className="hover:opacity-90 transition-all duration-300"
          >
            Agent Garden
          </StarBorder>
          <Button 
            variant="outline"
            className="border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500/10"
            onClick={handleGetInTouch}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};
