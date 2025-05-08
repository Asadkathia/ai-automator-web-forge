
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">NeuraFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-gray-700 hover:text-ai-blue transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-ai-blue transition-colors"
            >
              Services
            </Link>
            <Link
              to="/integration"
              className="text-gray-700 hover:text-ai-blue transition-colors"
            >
              Integration
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-ai-blue transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-ai-blue transition-colors"
            >
              Contact
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" className="border-ai-blue text-ai-blue hover:bg-ai-blue/10">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button className="ml-4 bg-ai-blue hover:bg-ai-blue/90">
                Dashboard
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-ai-blue"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col bg-white rounded-lg shadow-lg p-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-ai-blue py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-ai-blue py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/integration"
              className="text-gray-700 hover:text-ai-blue py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Integration
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-ai-blue py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-ai-blue py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/dashboard"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button variant="outline" className="w-full border-ai-blue text-ai-blue hover:bg-ai-blue/10">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </Link>
            <Link
              to="/dashboard"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full bg-ai-blue hover:bg-ai-blue/90">
                Dashboard
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
