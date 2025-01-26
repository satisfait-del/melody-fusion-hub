import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-4" : "py-6"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/4332f1e1-b45e-4c6b-88fa-75d03e602e36.png" alt="Logo" className="h-8" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/artists" className="nav-link">Artists</Link>
          <Link to="/influencers" className="nav-link">Influencers</Link>
          <Link to="/media" className="nav-link">Media</Link>
          <Link to="/brands" className="nav-link">Brands</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};