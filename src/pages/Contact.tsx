import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    category: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "", category: "general" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+254 700 123 456", "+254 711 987 654"],
      description: "Available 8AM - 6PM, Monday to Friday",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["support@wrskenya.co.ke", "info@wrskenya.co.ke"],
      description: "We respond within 24 hours",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Nairobi Business District", "Kimathi Street, Kenya"],
      description: "Visit us for in-person consultations",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 2PM"],
      description: "Sunday: Closed",
      color: "bg-success/10 text-success"
    }
  ];

  const categories = [
    { value: "general", label: "General Inquiry" },
    { value: "technical", label: "Technical Support" },
    { value: "billing", label: "Billing & Payments" },
    { value: "warehouse", label: "Warehouse Issues" },
    { value: "partnership", label: "Partnership" }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant answers to common questions",
      action: "Start Chat",
      color: "bg-primary"
    },
    {
      icon: FileText,
      title: "Help Center",
      description: "Browse our comprehensive knowledge base",
      action: "Visit Help Center",
      color: "bg-secondary"
    },
    {
      icon: Phone,
      title: "Schedule Call",
      description: "Book a consultation with our experts",
      action: "Book Now",
      color: "bg-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our warehouse receipt system? Our dedicated support team 
            is here to help Kenyan farmers succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="w-6 h-6" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+254 712 345 678"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="mt-2 w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        {categories.map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="Brief description of your inquiry"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Please provide detailed information about your inquiry..."
                      required
                      rows={6}
                      className="mt-2 w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full hero-gradient font-semibold py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Alternative Support Options */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Other Ways to Get Help</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {supportOptions.map((option, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 ${option.color} text-white rounded-lg flex items-center justify-center mx-auto mb-4`}>
                        <option.icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{option.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        {option.action}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-foreground">{detail}</p>
                      ))}
                      <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  We're committed to responding to all inquiries within 24 hours during business days.
                </p>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2 flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-destructive" />
                  Emergency Support
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  For urgent issues with stored produce:
                </p>
                <p className="font-medium text-foreground">+254 700 URGENT (700 874 368)</p>
                <p className="text-xs text-muted-foreground mt-1">Available 24/7</p>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Frequently Asked Questions</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Find answers to common questions about our services
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Browse FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;