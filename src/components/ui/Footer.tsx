import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.jpg";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logoIcon} alt="WRS Kenya" className="w-10 h-10 rounded-lg" />
              <div>
                <h3 className="text-xl font-bold">WRS Kenya</h3>
                <p className="text-sm opacity-80">Warehouse Receipt System</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Empowering Kenyan farmers with secure digital warehouse receipts 
              for avocado storage and trade.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="secondary" className="text-primary">
                Get Started
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#features" className="opacity-80 hover:opacity-100 transition-opacity">Features</a></li>
              <li><a href="#how-it-works" className="opacity-80 hover:opacity-100 transition-opacity">How It Works</a></li>
              <li><a href="#farmers" className="opacity-80 hover:opacity-100 transition-opacity">For Farmers</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/digital-warehouse-receipts" className="opacity-80 hover:opacity-100 transition-opacity">Digital Warehouse Receipts</a></li>
              <li><a href="/secure-storage" className="opacity-80 hover:opacity-100 transition-opacity">Secure Storage</a></li>
              <li><a href="/credit-access" className="opacity-80 hover:opacity-100 transition-opacity">Credit Access</a></li>
              <li><a href="/market-linkage" className="opacity-80 hover:opacity-100 transition-opacity">Market Linkage</a></li>
              <li><a href="/quality-assurance" className="opacity-80 hover:opacity-100 transition-opacity">Quality Assurance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="opacity-90">support@wrskenya.co.ke</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 opacity-80" />
                <span className="opacity-90">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 opacity-80" />
                <span className="opacity-90">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-80">
            © 2024 WRS Kenya. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <a href="#privacy" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#terms" className="opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#support" className="opacity-80 hover:opacity-100 transition-opacity">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};