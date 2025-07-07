import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import heroImg from "@/assets/avocado-hero.jpg";
import React from "react";

const CreditAccess: React.FC = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        <img src={heroImg} alt="Credit Access" className="w-full max-w-2xl rounded-lg shadow mb-8" />
        <div className="max-w-2xl w-full p-8 bg-card rounded-lg shadow-md border border-border">
          <h1 className="text-3xl font-bold mb-4 text-primary">Credit Access</h1>
          <p className="mb-4 text-muted-foreground">
            Use your Digital Warehouse Receipts as collateral to access affordable credit from our partner financial institutions. Benefits include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Quick loan approvals</li>
            <li>Competitive interest rates</li>
            <li>No need to sell produce immediately</li>
            <li>Flexible repayment options</li>
          </ul>
          <p>
            Our platform connects you with trusted lenders, helping you unlock the value of your stored avocados and invest in your farming operations.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default CreditAccess; 