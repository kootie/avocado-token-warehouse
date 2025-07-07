import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import heroImg from "@/assets/avocado-hero.jpg";
import React from "react";

const MarketLinkage: React.FC = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        <img src={heroImg} alt="Market Linkage" className="w-full max-w-2xl rounded-lg shadow mb-8" />
        <div className="max-w-2xl w-full p-8 bg-card rounded-lg shadow-md border border-border">
          <h1 className="text-3xl font-bold mb-4 text-primary">Market Linkage</h1>
          <p className="mb-4 text-muted-foreground">
            We connect farmers and traders to a wide network of buyers, exporters, and processors, ensuring fair prices and reliable transactions. Our market linkage services offer:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access to local and international markets</li>
            <li>Verified buyers and transparent deals</li>
            <li>Real-time market information</li>
            <li>Support with logistics and documentation</li>
          </ul>
          <p>
            By leveraging our platform, you can maximize your profits and build lasting business relationships in the avocado value chain.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default MarketLinkage; 