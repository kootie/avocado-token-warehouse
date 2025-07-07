import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { MapPin, Calendar, Plus, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DepositAvocados = () => {
  const [formData, setFormData] = useState({
    weight: "",
    grade: "A+",
    warehouse: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const warehouses = [
    { id: "kiambu", name: "Kiambu Central Warehouse", location: "Kiambu County", capacity: "85%" },
    { id: "nakuru", name: "Nakuru Agricultural Hub", location: "Nakuru County", capacity: "67%" },
    { id: "meru", name: "Meru Farmers Warehouse", location: "Meru County", capacity: "45%" },
    { id: "machakos", name: "Machakos Storage Facility", location: "Machakos County", capacity: "23%" }
  ];

  const grades = [
    { value: "A+", label: "Grade A+ (Premium)", description: "Perfect size, color, and quality" },
    { value: "A", label: "Grade A (Export)", description: "High quality for export markets" },
    { value: "B", label: "Grade B (Local)", description: "Good quality for local markets" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Deposit Successful!",
      description: `${formData.weight}kg of Grade ${formData.grade} avocados deposited successfully.`,
    });

    setIsSubmitting(false);
    // Reset form or redirect to tokens page
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Deposit Your <span className="text-primary">Avocados</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Store your harvest in certified warehouses and receive digital tokens
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Deposit Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Plus className="w-5 h-5" />
                    <span>New Deposit</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Weight Input */}
                    <div>
                      <Label htmlFor="weight" className="text-sm font-medium">
                        Weight (kg) *
                      </Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="Enter weight in kilograms"
                        value={formData.weight}
                        onChange={(e) => setFormData({...formData, weight: e.target.value})}
                        className="mt-2"
                        required
                      />
                    </div>

                    {/* Grade Selection */}
                    <div>
                      <Label className="text-sm font-medium">Grade Selection *</Label>
                      <div className="mt-2 space-y-3">
                        {grades.map((grade) => (
                          <div key={grade.value} className="flex items-center space-x-3">
                            <input
                              type="radio"
                              id={grade.value}
                              name="grade"
                              value={grade.value}
                              checked={formData.grade === grade.value}
                              onChange={(e) => setFormData({...formData, grade: e.target.value})}
                              className="w-4 h-4 text-primary"
                            />
                            <label htmlFor={grade.value} className="flex-1">
                              <div className="font-medium text-foreground">{grade.label}</div>
                              <div className="text-sm text-muted-foreground">{grade.description}</div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Warehouse Selection */}
                    <div>
                      <Label className="text-sm font-medium">Select Warehouse *</Label>
                      <div className="mt-2 grid gap-3">
                        {warehouses.map((warehouse) => (
                          <div key={warehouse.id} className="flex items-center space-x-3">
                            <input
                              type="radio"
                              id={warehouse.id}
                              name="warehouse"
                              value={warehouse.id}
                              checked={formData.warehouse === warehouse.id}
                              onChange={(e) => setFormData({...formData, warehouse: e.target.value})}
                              className="w-4 h-4 text-primary"
                            />
                            <label htmlFor={warehouse.id} className="flex-1 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="font-medium text-foreground">{warehouse.name}</div>
                                  <div className="flex items-center text-sm text-muted-foreground">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    {warehouse.location}
                                  </div>
                                </div>
                                <div className="text-sm">
                                  <span className="text-muted-foreground">Capacity:</span>
                                  <span className={`ml-1 font-medium ${
                                    parseInt(warehouse.capacity) > 80 ? 'text-destructive' :
                                    parseInt(warehouse.capacity) > 60 ? 'text-accent' : 'text-success'
                                  }`}>
                                    {warehouse.capacity}
                                  </span>
                                </div>
                              </div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <Label htmlFor="notes" className="text-sm font-medium">
                        Additional Notes (Optional)
                      </Label>
                      <textarea
                        id="notes"
                        placeholder="Any special instructions or notes about your deposit..."
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        className="mt-2 w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        rows={4}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      className="w-full hero-gradient font-semibold py-3"
                      disabled={isSubmitting || !formData.weight || !formData.warehouse}
                    >
                      {isSubmitting ? (
                        "Processing Deposit..."
                      ) : (
                        <>
                          <Plus className="w-4 h-4 mr-2" />
                          Create Deposit & Generate Token
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Summary & Info */}
            <div className="space-y-6">
              {/* Deposit Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Deposit Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weight:</span>
                    <span className="font-medium">{formData.weight || "0"}kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Grade:</span>
                    <span className="font-medium">Grade {formData.grade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Estimated Value:</span>
                    <span className="font-medium text-primary">
                      ₦{formData.weight ? (parseInt(formData.weight) * 180).toLocaleString() : "0"}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center space-x-2 text-success">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">Digital token will be generated</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Process Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <p className="font-medium text-foreground">Quality Verification</p>
                        <p className="text-sm text-muted-foreground">Warehouse inspects and verifies your avocados</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-secondary/10 text-secondary rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <p className="font-medium text-foreground">Digital Token Created</p>
                        <p className="text-sm text-muted-foreground">Receive your NFT-style digital receipt</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <p className="font-medium text-foreground">Ready for Trade</p>
                        <p className="text-sm text-muted-foreground">Use token for credit or direct sales</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DepositAvocados;