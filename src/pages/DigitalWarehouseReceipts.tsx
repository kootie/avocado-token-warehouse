import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import heroImg from "@/assets/avocado-hero.jpg";
import React from "react";

const DigitalWarehouseReceipts: React.FC = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        <img src={heroImg} alt="Digital Warehouse Receipts" className="w-full max-w-2xl rounded-lg shadow mb-8" />
        <div className="max-w-2xl w-full p-8 bg-card rounded-lg shadow-md border border-border">
          <h1 className="text-3xl font-bold mb-4 text-primary">Digital Warehouse Receipts</h1>
          <p className="mb-4 text-muted-foreground">
            Digital Warehouse Receipts (DWRs) are secure, digital documents that represent ownership of stored avocados in certified warehouses. They enable farmers and traders to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Prove ownership and quality of their produce</li>
            <li>Access credit using DWRs as collateral</li>
            <li>Trade or transfer ownership easily and securely</li>
            <li>Track storage and transaction history online</li>
          </ul>
          <p>
            Our platform ensures the authenticity and security of every digital receipt, empowering Kenyan farmers and traders with modern tools for agricultural commerce.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default DigitalWarehouseReceipts; 