import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import heroImg from "@/assets/avocado-hero.jpg";
import React from "react";

const QualityAssurance: React.FC = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        <img src={heroImg} alt="Quality Assurance" className="w-full max-w-2xl rounded-lg shadow mb-8" />
        <div className="max-w-2xl w-full p-8 bg-card rounded-lg shadow-md border border-border">
          <h1 className="text-3xl font-bold mb-4 text-primary">Quality Assurance</h1>
          <p className="mb-4 text-muted-foreground">
            Our quality assurance processes guarantee that only the best avocados are stored and traded. We ensure:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Strict grading and sorting standards</li>
            <li>Regular inspections and certifications</li>
            <li>Traceability from farm to market</li>
            <li>Compliance with export requirements</li>
          </ul>
          <p>
            Trust our platform to maintain the highest quality standards, giving you confidence in every transaction.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default QualityAssurance; 