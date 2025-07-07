import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import heroImg from "@/assets/avocado-hero.jpg";
import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";

const Support: React.FC = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        <img src={heroImg} alt="Support" className="w-full max-w-2xl rounded-lg shadow mb-8" />
        <div className="max-w-2xl w-full p-8 bg-card rounded-lg shadow-md border border-border">
          <h1 className="text-3xl font-bold mb-4 text-primary">Support</h1>
          <p className="mb-4 text-muted-foreground">
            Need help or have questions? Our support team is here to assist you with any issues related to digital warehouse receipts, storage, credit access, market linkage, and quality assurance.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">Contact Information</h2>
          <ul className="mb-4 space-y-2">
            <li className="flex items-center space-x-2"><Mail className="w-5 h-5 text-primary" /><span>support@wrskenya.co.ke</span></li>
            <li className="flex items-center space-x-2"><Phone className="w-5 h-5 text-primary" /><span>+254 700 123 456</span></li>
            <li className="flex items-center space-x-2"><MapPin className="w-5 h-5 text-primary" /><span>Nairobi, Kenya</span></li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2">Frequently Asked Questions</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>How do I access my digital warehouse receipts?</li>
            <li>What should I do if I forget my account password?</li>
            <li>How can I apply for credit using my receipts?</li>
            <li>Who do I contact for urgent support?</li>
          </ul>
          <p className="text-muted-foreground">
            For more information, please reach out to us via email or phone, or visit our office during business hours. We are committed to providing timely and effective support to all our users.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Support; 