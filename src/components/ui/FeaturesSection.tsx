import { Card, CardContent } from "@/components/ui/card";
import { User, Search, Calendar, Plus } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: User,
      title: "Farmer Registration",
      description: "Quick and secure registration for Kenyan farmers with identity verification.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Plus,
      title: "Deposit Avocados",
      description: "Record your produce deposits at certified warehouses and get instant digital receipts.",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Search,
      title: "Digital Tokens",
      description: "Receive beautiful NFT-style tokens as proof of ownership that you can redeem anytime.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Calendar,
      title: "Transaction History",
      description: "Track all your deposits, redemptions, and transactions in one secure dashboard.",
      color: "bg-success/10 text-success"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            ✨ Key Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className="text-primary block">Secure Your Harvest</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools Kenyan farmers need 
            to safely store, track, and monetize their avocado harvests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Register & Verify</h4>
              <p className="text-muted-foreground">
                Create your farmer profile and verify your identity with our secure system.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-6 -right-4 text-primary">
                →
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Store Avocados</h4>
              <p className="text-muted-foreground">
                Deposit your avocados at certified warehouses and receive digital tokens.
              </p>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-6 -right-4 text-secondary">
                →
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Access Credit</h4>
              <p className="text-muted-foreground">
                Use your digital receipts to access credit facilities and market opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};