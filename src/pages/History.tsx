import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Search, Filter, Download, Calendar, ArrowUp, ArrowDown, FileText } from "lucide-react";

const History = () => {
  const [dateFilter, setDateFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const transactions = [
    {
      id: "TXN-001",
      type: "Deposit",
      tokenId: "WRS-001",
      amount: "50kg",
      value: "₦9,000",
      date: "2024-01-15",
      time: "10:30 AM",
      warehouse: "Kiambu Central Warehouse",
      status: "Completed",
      grade: "A+"
    },
    {
      id: "TXN-002",
      type: "Redemption",
      tokenId: "WRS-002",
      amount: "25kg",
      value: "₦4,500",
      date: "2024-01-10",
      time: "2:15 PM",
      warehouse: "Nakuru Agricultural Hub",
      status: "Completed",
      grade: "A"
    },
    {
      id: "TXN-003",
      type: "Credit Application",
      tokenId: "WRS-001",
      amount: "₦5,000",
      value: "₦5,000",
      date: "2024-01-08",
      time: "11:45 AM",
      warehouse: "Kiambu Central Warehouse",
      status: "Approved",
      grade: "A+"
    },
    {
      id: "TXN-004",
      type: "Deposit",
      tokenId: "WRS-003",
      amount: "75kg",
      value: "₦13,500",
      date: "2024-01-05",
      time: "9:20 AM",
      warehouse: "Meru Farmers Warehouse",
      status: "Completed",
      grade: "A"
    },
    {
      id: "TXN-005",
      type: "Partial Redemption",
      tokenId: "WRS-003",
      amount: "30kg",
      value: "₦5,400",
      date: "2024-01-03",
      time: "3:30 PM",
      warehouse: "Meru Farmers Warehouse",
      status: "Completed",
      grade: "A"
    },
    {
      id: "TXN-006",
      type: "Deposit",
      tokenId: "WRS-004",
      amount: "100kg",
      value: "₦15,000",
      date: "2023-12-28",
      time: "1:10 PM",
      warehouse: "Machakos Storage Facility",
      status: "Completed",
      grade: "B"
    }
  ];

  const filteredTransactions = transactions.filter(transaction => {
    if (typeFilter !== "all" && transaction.type.toLowerCase().replace(" ", "") !== typeFilter) return false;
    if (dateFilter === "week") {
      const transactionDate = new Date(transaction.date);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return transactionDate >= weekAgo;
    }
    if (dateFilter === "month") {
      const transactionDate = new Date(transaction.date);
      const monthAgo = new Date();
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      return transactionDate >= monthAgo;
    }
    return true;
  });

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "Deposit": return <ArrowDown className="w-5 h-5" />;
      case "Redemption": 
      case "Partial Redemption": return <ArrowUp className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case "Deposit": return "text-success bg-success/10";
      case "Redemption":
      case "Partial Redemption": return "text-primary bg-primary/10";
      case "Credit Application": return "text-accent bg-accent/10";
      default: return "text-muted-foreground bg-muted";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-success/10 text-success";
      case "Approved": return "bg-primary/10 text-primary";
      case "Pending": return "bg-accent/10 text-accent";
      case "Rejected": return "bg-destructive/10 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const totalValue = filteredTransactions
    .filter(t => t.type === "Deposit")
    .reduce((sum, t) => sum + parseInt(t.value.replace(/[₦,]/g, "")), 0);

  const totalWeight = filteredTransactions
    .filter(t => t.type === "Deposit")
    .reduce((sum, t) => sum + parseInt(t.amount.replace("kg", "")), 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Transaction <span className="text-primary">History</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Complete record of all your warehouse receipt activities
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">
                {filteredTransactions.length}
              </div>
              <div className="text-sm text-muted-foreground">Total Transactions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-success mb-2">
                {totalWeight}kg
              </div>
              <div className="text-sm text-muted-foreground">Total Deposited</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-accent mb-2">
                ₦{totalValue.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Value</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by transaction ID or token ID..."
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Date Filter */}
              <div className="flex space-x-2">
                {[
                  { value: "all", label: "All Time" },
                  { value: "week", label: "This Week" },
                  { value: "month", label: "This Month" }
                ].map((option) => (
                  <Button
                    key={option.value}
                    variant={dateFilter === option.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDateFilter(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>

              {/* Type Filter */}
              <div className="flex space-x-2">
                {[
                  { value: "all", label: "All Types" },
                  { value: "deposit", label: "Deposits" },
                  { value: "redemption", label: "Redemptions" },
                  { value: "creditapplication", label: "Credit" }
                ].map((option) => (
                  <Button
                    key={option.value}
                    variant={typeFilter === option.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTypeFilter(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>

              {/* Export Button */}
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transaction List */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {filteredTransactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getTransactionColor(transaction.type)}`}>
                      {getTransactionIcon(transaction.type)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-foreground">{transaction.id}</p>
                        <Badge variant="outline" className="text-xs">
                          {transaction.tokenId}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{transaction.type}</p>
                      <p className="text-xs text-muted-foreground">{transaction.warehouse}</p>
                    </div>
                  </div>

                  <div className="hidden md:block text-center">
                    <p className="font-medium text-foreground">{transaction.amount}</p>
                    <p className="text-sm text-muted-foreground">Grade {transaction.grade}</p>
                  </div>

                  <div className="text-center">
                    <p className="font-medium text-foreground">{transaction.value}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    <p className="text-xs text-muted-foreground">{transaction.time}</p>
                  </div>

                  <div className="text-right">
                    <Badge className={getStatusColor(transaction.status)}>
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            {filteredTransactions.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No transactions found</h3>
                <p className="text-muted-foreground mb-6">
                  No transactions match your current filters. Try adjusting the date range or transaction type.
                </p>
                <Button variant="outline" onClick={() => {
                  setDateFilter("all");
                  setTypeFilter("all");
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default History;