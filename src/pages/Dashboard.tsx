import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Plus, User, Calendar, Search, ArrowUp, ArrowDown } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Deposits",
      value: "12",
      change: "+2 this month",
      icon: Plus,
      color: "text-primary"
    },
    {
      title: "Active Tokens",
      value: "8",
      change: "Ready for trade",
      icon: Search,
      color: "text-secondary"
    },
    {
      title: "Total Weight",
      value: "450kg",
      change: "+50kg this month",
      icon: ArrowUp,
      color: "text-success"
    },
    {
      title: "Market Value",
      value: "₦81,000",
      change: "+5% from last month",
      icon: ArrowUp,
      color: "text-accent"
    }
  ];

  const recentTransactions = [
    {
      id: "WRS-001",
      type: "Deposit",
      amount: "50kg",
      date: "2024-01-15",
      status: "Active",
      warehouse: "Kiambu Warehouse"
    },
    {
      id: "WRS-002",
      type: "Redemption",
      amount: "25kg",
      date: "2024-01-10",
      status: "Completed",
      warehouse: "Nakuru Warehouse"
    },
    {
      id: "WRS-003",
      type: "Deposit",
      amount: "75kg",
      date: "2024-01-05",
      status: "Active",
      warehouse: "Meru Warehouse"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, <span className="text-primary">John Kamau</span>
          </h1>
          <p className="text-muted-foreground">
            Manage your avocado deposits and digital tokens from your dashboard
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                  </div>
                  <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Button className="h-20 flex flex-col space-y-2 hero-gradient">
                <Plus className="w-6 h-6" />
                <span>Deposit Avocados</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Search className="w-6 h-6" />
                <span>View Tokens</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col space-y-2">
                <Calendar className="w-6 h-6" />
                <span>Check History</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Recent Transactions</span>
              </div>
              <Button variant="outline" size="sm">View All</Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {recentTransactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'Deposit' ? 'bg-success/10 text-success' : 'bg-accent/10 text-accent'
                    }`}>
                      {transaction.type === 'Deposit' ? 
                        <ArrowDown className="w-5 h-5" /> : 
                        <ArrowUp className="w-5 h-5" />
                      }
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{transaction.id}</p>
                      <p className="text-sm text-muted-foreground">{transaction.warehouse}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{transaction.amount}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    transaction.status === 'Active' ? 
                      'bg-success/10 text-success' : 
                      'bg-muted text-muted-foreground'
                  }`}>
                    {transaction.status}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;