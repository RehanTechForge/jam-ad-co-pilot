// import { useState, useEffect } from "react";
// import { Menu, X, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import jamLogo from "@/assets/jam-logo.png";
// import jamLogo1 from "@/assets/logo.png";
// import { NavLink } from "react-router-dom";

// const Navigation = ({ onOpenWaitlist, onScheduleDemo }: { onOpenWaitlist: () => void; onScheduleDemo?: () => void }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "glass py-4" : "py-6"
//       }`}
//     >
//       <div className="container mx-auto px-6">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <NavLink to="/">
//             <div className="flex items-center space-x-2">
//               <img src={jamLogo1} alt="JAIM" className="h-10 w-10" />
//               <span className="text-2xl font-bold text-gradient">JAIM</span>
//             </div>
//           </NavLink>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <button
//               onClick={() => scrollToSection("features")}
//               className="text-foreground/80 hover:text-foreground transition-colors"
//             >
//               Features
//             </button>
//             <button
//               onClick={() => scrollToSection("how-it-works")}
//               className="text-foreground/80 hover:text-foreground transition-colors"
//             >
//               How it Works
//             </button>
//             <button
//               onClick={() => scrollToSection("pricing")}
//               className="text-foreground/80 hover:text-foreground transition-colors"
//             >
//               Pricing
//             </button>
//             <button
//               onClick={() => scrollToSection("faq")}
//               className="text-foreground/80 hover:text-foreground transition-colors"
//             >
//               Resources
//             </button>
//             <a href="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
//               Contact
//             </a>
//             <Button
//               onClick={onOpenWaitlist}
//               className="bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 hover:scale-[1.02]"
//             >
//               Get Early Access
//               <ChevronRight className="ml-2 h-4 w-4" />
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden text-foreground"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden mt-6 pb-6 border-t border-border pt-6 animate-fade-in">
//             <div className="flex flex-col space-y-4">
//               <button
//                 onClick={() => scrollToSection("features")}
//                 className="text-foreground/80 hover:text-foreground transition-colors text-left"
//               >
//                 Features
//               </button>
//               <button
//                 onClick={() => scrollToSection("how-it-works")}
//                 className="text-foreground/80 hover:text-foreground transition-colors text-left"
//               >
//                 How it Works
//               </button>
//               <button
//                 onClick={() => scrollToSection("pricing")}
//                 className="text-foreground/80 hover:text-foreground transition-colors text-left"
//               >
//                 Pricing
//               </button>
//               <button
//                 onClick={() => scrollToSection("faq")}
//                 className="text-foreground/80 hover:text-foreground transition-colors text-left"
//               >
//                 Resources
//               </button>
//               <a href="/contact" className="text-foreground/80 hover:text-foreground transition-colors text-left">
//                 Contact
//               </a>
//               <Button
//                 onClick={onOpenWaitlist}
//                 className="bg-primary text-primary-foreground hover:opacity-90 w-full mt-4"
//               >
//                 Get Early Access
//                 <ChevronRight className="ml-2 h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import jamLogo from "@/assets/jam-logo.png";
import jamLogo1 from "@/assets/logo.png";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Navigation = ({
  onOpenWaitlist,
  onScheduleDemo,
}: {
  onOpenWaitlist: () => void;
  onScheduleDemo?: () => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  // Handle hash-based navigation when component mounts or location changes
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/">
            <div className="flex items-center space-x-2">
              <img src={jamLogo1} alt="JAIM" className="h-10 w-10" />
              <span className="text-2xl font-bold text-gradient">JAIM</span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Resources
            </button>
            <NavLink
              to="/contact"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </NavLink>
            <Button
              onClick={onOpenWaitlist}
              className="bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 hover:scale-[1.02]"
            >
              Get Early Access
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-border pt-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                Resources
              </button>
              <NavLink
                to="/contact"
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
              <Button
                onClick={onOpenWaitlist}
                className="bg-primary text-primary-foreground hover:opacity-90 w-full mt-4"
              >
                Get Early Access
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
