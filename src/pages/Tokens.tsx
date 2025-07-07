import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Search, Filter, Calendar, MapPin, Check, Clock, ArrowRight } from "lucide-react";

const Tokens = () => {
  const [filter, setFilter] = useState("all");

  const tokens = [
    {
      id: "WRS-001",
      weight: "50kg",
      grade: "A+",
      depositDate: "2024-01-15",
      maturityDate: "2024-04-15",
      warehouse: "Kiambu Central Warehouse",
      location: "Kiambu County",
      status: "Active",
      value: "₦9,000",
      image: "🥑",
      color: "from-success to-accent"
    },
    {
      id: "WRS-002",
      weight: "75kg",
      grade: "A",
      depositDate: "2024-01-05",
      maturityDate: "2024-04-05",
      warehouse: "Meru Farmers Warehouse",
      location: "Meru County",
      status: "Mature",
      value: "₦13,500",
      image: "🥑",
      color: "from-primary to-secondary"
    },
    {
      id: "WRS-003",
      weight: "25kg",
      grade: "A+",
      depositDate: "2023-12-20",
      maturityDate: "2024-03-20",
      warehouse: "Nakuru Agricultural Hub",
      location: "Nakuru County",
      status: "Redeemed",
      value: "₦4,500",
      image: "🥑",
      color: "from-muted to-border"
    },
    {
      id: "WRS-004",
      weight: "100kg",
      grade: "B",
      depositDate: "2024-01-20",
      maturityDate: "2024-04-20",
      warehouse: "Machakos Storage Facility",
      location: "Machakos County",
      status: "Active",
      value: "₦15,000",
      image: "🥑",
      color: "from-accent to-success"
    }
  ];

  const filteredTokens = tokens.filter(token => {
    if (filter === "all") return true;
    return token.status.toLowerCase() === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-success/10 text-success";
      case "Mature": return "bg-primary/10 text-primary";
      case "Redeemed": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Your Digital <span className="text-primary">Tokens</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            NFT-style digital receipts for your stored avocados
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search tokens by ID or warehouse..."
              className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex space-x-2">
            {["all", "active", "mature", "redeemed"].map((status) => (
              <Button
                key={status}
                variant={filter === status ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(status)}
                className="capitalize"
              >
                {status}
              </Button>
            ))}
          </div>
        </div>

        {/* Token Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">
                {tokens.filter(t => t.status === "Active").length}
              </div>
              <div className="text-sm text-muted-foreground">Active Tokens</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-success mb-2">
                {tokens.filter(t => t.status === "Mature").length}
              </div>
              <div className="text-sm text-muted-foreground">Ready to Redeem</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-secondary mb-2">
                {tokens.reduce((sum, t) => sum + parseInt(t.weight), 0)}kg
              </div>
              <div className="text-sm text-muted-foreground">Total Weight</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-accent mb-2">
                {tokens.reduce((sum, t) => sum + parseInt(t.value.replace(/[₦,]/g, "")), 0).toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Value</div>
            </CardContent>
          </Card>
        </div>

        {/* Tokens Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTokens.map((token) => (
            <Card key={token.id} className="card-hover overflow-hidden">
              <div className={`h-32 bg-gradient-to-br ${token.color} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50">{token.image}</div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(token.status)}>
                    {token.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-lg font-bold">{token.id}</div>
                  <div className="text-sm opacity-90">Grade {token.grade}</div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Weight</span>
                    <span className="font-medium">{token.weight}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Value</span>
                    <span className="font-medium text-primary">{token.value}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      {token.warehouse}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      Deposited: {token.depositDate}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      Matures: {token.maturityDate}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    {token.status === "Active" && (
                      <Button variant="outline" className="w-full">
                        <Check className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    )}
                    {token.status === "Mature" && (
                      <Button className="w-full hero-gradient">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Redeem Token
                      </Button>
                    )}
                    {token.status === "Redeemed" && (
                      <Button variant="outline" disabled className="w-full">
                        <Check className="w-4 h-4 mr-2" />
                        Redeemed
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTokens.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🥑</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No tokens found</h3>
            <p className="text-muted-foreground mb-6">
              {filter === "all" 
                ? "You haven't created any tokens yet. Start by depositing your avocados!"
                : `No ${filter} tokens found. Try adjusting your filter.`
              }
            </p>
            <Button className="hero-gradient">
              Deposit Avocados
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Tokens;