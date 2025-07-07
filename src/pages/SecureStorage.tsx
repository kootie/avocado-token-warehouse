import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import heroImg from "@/assets/avocado-hero.jpg";
import React from "react";

const SecureStorage: React.FC = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        <img src={heroImg} alt="Secure Storage" className="w-full max-w-2xl rounded-lg shadow mb-8" />
        <div className="max-w-2xl w-full p-8 bg-card rounded-lg shadow-md border border-border">
          <h1 className="text-3xl font-bold mb-4 text-primary">Secure Storage</h1>
          <p className="mb-4 text-muted-foreground">
            Our certified warehouses provide safe, climate-controlled storage for avocados, ensuring quality and reducing post-harvest losses. Key features include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>24/7 security and monitoring</li>
            <li>Temperature and humidity control</li>
            <li>Regular quality inspections</li>
            <li>Transparent inventory management</li>
          </ul>
          <p>
            With secure storage, farmers can store their produce with confidence, knowing it is protected and well-managed until it is ready for sale or withdrawal.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default SecureStorage; 