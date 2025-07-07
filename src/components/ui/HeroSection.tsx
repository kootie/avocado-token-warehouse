import { Button } from "@/components/ui/button";
import { ArrowDown, Check } from "lucide-react";
import heroImage from "@/assets/avocado-hero.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                🥑 100% Secure Digital Receipts
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Secure Your
                <span className="text-primary block">AVOCADO</span>
                <span className="hero-gradient bg-clip-text text-transparent">HARVEST</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Kenya's first digital warehouse receipt system for avocado farmers. 
                Store your produce safely, receive NFT-style digital tokens, and 
                access credit markets with ease.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {[
                "Certified warehouse storage",
                "Digital NFT-style receipts",
                "Access to credit facilities",
                "Transparent market pricing"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-success-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="hero-gradient font-semibold px-8 py-4 text-lg avocado-shadow" onClick={() => window.location.href = '/deposit'}>
                Store Your Harvest
              </Button>
              <Button variant="outline" size="lg" className="font-semibold px-8 py-4 text-lg" onClick={() => window.location.href = '/how-it-works'}>
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Farmers Registered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Avocados Stored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">₦2M+</div>
                <div className="text-sm text-muted-foreground">Credit Facilitated</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Fresh avocados in warehouse" 
                className="w-full h-auto rounded-2xl avocado-shadow"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 avocado-shadow hidden lg:block">
              <div className="text-sm font-medium text-primary">Digital Receipt #001</div>
              <div className="text-xs text-muted-foreground">50kg Premium Avocados</div>
              <div className="text-xs text-success font-semibold mt-1">Verified ✓</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-accent/10 border border-accent/20 rounded-xl p-4 backdrop-blur-sm hidden lg:block">
              <div className="text-sm font-medium text-accent-foreground">Market Ready</div>
              <div className="text-xs text-muted-foreground">Premium Grade A+</div>
              <div className="text-xs text-success font-semibold mt-1">₦180/kg</div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 hero-gradient opacity-20 rounded-2xl -rotate-3 scale-105 -z-10"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center space-y-2 text-muted-foreground">
            <span className="text-sm">Discover More</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};