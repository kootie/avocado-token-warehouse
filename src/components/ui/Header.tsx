import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Phone, Mail } from "lucide-react";
import logoIcon from "@/assets/logo-icon.jpg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>support@wrskenya.co.ke</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+254 700 123 456</span>
            </div>
          </div>
          <div className="hidden md:block text-sm">
            Secure Digital Warehouse Receipts for Kenyan Farmers
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logoIcon} alt="WRS Kenya" className="w-10 h-10 rounded-lg" />
            <div>
              <h1 className="text-xl font-bold text-primary">WRS Kenya</h1>
              <p className="text-xs text-muted-foreground">Warehouse Receipt System</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#farmers" className="text-foreground hover:text-primary transition-colors font-medium">
              For Farmers
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="font-medium">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="font-medium hero-gradient">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Home
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Features
              </a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                How It Works
              </a>
              <a href="#farmers" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                For Farmers
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Contact
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="font-medium">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button size="sm" className="font-medium hero-gradient">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};