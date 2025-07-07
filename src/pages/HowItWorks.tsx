import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { User, Plus, Search, Calendar, Check, ArrowRight, MapPin, Shield, FileText } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Register as a Farmer",
      description: "Create your farmer profile with identity verification and farm details",
      icon: User,
      color: "bg-primary text-primary-foreground",
      details: [
        "Provide personal identification documents",
        "Verify your farm location and ownership",
        "Complete farmer certification process",
        "Set up secure account credentials"
      ]
    },
    {
      step: 2,
      title: "Deposit Your Avocados",
      description: "Bring your harvest to certified warehouses for secure storage",
      icon: Plus,
      color: "bg-secondary text-secondary-foreground",
      details: [
        "Select from certified warehouse locations",
        "Quality inspection and grading process",
        "Record weight, grade, and storage conditions",
        "Receive confirmation of deposit"
      ]
    },
    {
      step: 3,
      title: "Get Digital Tokens",
      description: "Receive beautiful NFT-style digital receipts as proof of ownership",
      icon: Search,
      color: "bg-accent text-accent-foreground",
      details: [
        "Instant generation of digital token",
        "Unique NFT-style visual design",
        "Blockchain-secured ownership proof",
        "QR code for easy verification"
      ]
    },
    {
      step: 4,
      title: "Access Credit & Markets",
      description: "Use your tokens to access credit facilities and trade opportunities",
      icon: Calendar,
      color: "bg-success text-success-foreground",
      details: [
        "Apply for credit using tokens as collateral",
        "Access competitive market pricing",
        "Trade tokens before harvest maturity",
        "Redeem when ready for sale"
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Secure Storage",
      description: "Your avocados are stored in certified, temperature-controlled warehouses with full insurance coverage."
    },
    {
      icon: FileText,
      title: "Digital Receipts",
      description: "Blockchain-secured digital tokens that serve as tamper-proof proof of ownership and quality."
    },
    {
      icon: MapPin,
      title: "Quality Assurance",
      description: "Professional grading and quality certification by trained agricultural specialists."
    },
    {
      icon: Check,
      title: "Market Access",
      description: "Connect with buyers, exporters, and credit providers through our verified network."
    }
  ];

  const faqs = [
    {
      question: "How long can I store my avocados?",
      answer: "Avocados can be stored for up to 3-6 months depending on variety and storage conditions. Our warehouses maintain optimal temperature and humidity levels."
    },
    {
      question: "What happens if the warehouse fails?",
      answer: "All stored produce is fully insured. In the unlikely event of warehouse failure, you'll be compensated at current market rates."
    },
    {
      question: "Can I redeem part of my deposit?",
      answer: "Yes! You can redeem any portion of your stored avocados at any time. Your digital token will be updated accordingly."
    },
    {
      question: "How is the quality maintained?",
      answer: "Our warehouses use advanced climate control systems and regular quality monitoring to ensure your avocados maintain their grade throughout storage."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              How <span className="text-primary">WRS Kenya</span> Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A simple, secure process that transforms how Kenyan farmers store, 
              trade, and finance their avocado harvests through digital technology.
            </p>
            <Button size="lg" className="hero-gradient font-semibold px-8 py-4">
              Get Started Today
            </Button>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Simple <span className="text-primary">4-Step Process</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From registration to revenue, our streamlined process makes warehouse receipt 
                management accessible to every Kenyan farmer.
              </p>
            </div>

            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center`}>
                        <step.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="text-sm text-primary font-semibold">STEP {step.step}</div>
                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground">{step.description}</p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-success" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {index < steps.length - 1 && (
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <span>Next step</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Visual */}
                  <div className="flex-1">
                    <Card className="card-hover">
                      <CardContent className="p-8">
                        <div className={`w-full h-64 bg-gradient-to-br ${
                          index === 0 ? 'from-primary/20 to-primary/5' :
                          index === 1 ? 'from-secondary/20 to-secondary/5' :
                          index === 2 ? 'from-accent/20 to-accent/5' :
                          'from-success/20 to-success/5'
                        } rounded-xl flex items-center justify-center`}>
                          <step.icon className="w-24 h-24 text-primary/40" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-primary">WRS Kenya?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built specifically for Kenyan farmers, our platform combines traditional 
                warehouse receipts with modern digital technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our warehouse receipt system
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Harvest?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join hundreds of Kenyan farmers who trust WRS Kenya for secure storage 
              and digital trading of their avocado harvests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-semibold px-8 py-4">
                Register as Farmer
              </Button>
              <Button size="lg" variant="outline" className="font-semibold px-8 py-4 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;