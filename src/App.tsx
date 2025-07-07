import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import DepositAvocados from "./pages/DepositAvocados";
import Tokens from "./pages/Tokens";
import History from "./pages/History";
import Profile from "./pages/Profile";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DigitalWarehouseReceipts from "./pages/DigitalWarehouseReceipts";
import SecureStorage from "./pages/SecureStorage";
import CreditAccess from "./pages/CreditAccess";
import MarketLinkage from "./pages/MarketLinkage";
import QualityAssurance from "./pages/QualityAssurance";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Support from "./pages/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/deposit" element={<DepositAvocados />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/digital-warehouse-receipts" element={<DigitalWarehouseReceipts />} />
          <Route path="/secure-storage" element={<SecureStorage />} />
          <Route path="/credit-access" element={<CreditAccess />} />
          <Route path="/market-linkage" element={<MarketLinkage />} />
          <Route path="/quality-assurance" element={<QualityAssurance />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/support" element={<Support />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
