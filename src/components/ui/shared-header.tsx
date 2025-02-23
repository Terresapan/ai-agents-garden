
import { Link } from "react-router-dom";

export const SharedHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-blue-500">
          Artful Geek
        </Link>
        <div className="flex gap-4">
          <Link to="/agent-garden" className="hover:text-fuchsia-500 transition-colors">
            Agent Garden
          </Link>
        </div>
      </div>
    </div>
  );
};
