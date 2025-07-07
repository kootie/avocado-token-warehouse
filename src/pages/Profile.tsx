import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { User, MapPin, Phone, Mail, Calendar, Edit, Save, Camera, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "John Kamau Mwangi",
    email: "john.kamau@email.com",
    phone: "+254 712 345 678",
    idNumber: "12345678",
    farmLocation: "Kiambu County, Central Kenya",
    farmSize: "2.5",
    primaryCrop: "Avocados",
    yearsExperience: "8",
    bankAccount: "****1234 - Kenya Commercial Bank",
    joinDate: "2023-12-15"
  });
  const { toast } = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated.",
    });
  };

  const stats = [
    { label: "Total Deposits", value: "12", icon: Calendar },
    { label: "Active Tokens", value: "8", icon: Check },
    { label: "Total Weight", value: "450kg", icon: MapPin },
    { label: "Member Since", value: "1 year", icon: User }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Farmer <span className="text-primary">Profile</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Manage your personal information and farm details
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <User className="w-12 h-12 text-primary" />
                    </div>
                    <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    {profileData.fullName}
                  </h2>
                  <p className="text-muted-foreground mb-4">Verified Farmer</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{profileData.farmLocation}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {profileData.joinDate}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center justify-center space-x-2 text-success">
                      <Check className="w-4 h-4" />
                      <span className="text-sm font-medium">Verified Account</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                          <stat.icon className="w-5 h-5" />
                        </div>
                        <div className="font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Profile Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Personal Information</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  >
                    {isEditing ? (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </>
                    ) : (
                      <>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </>
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={profileData.fullName}
                        onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                        disabled={!isEditing}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        disabled={!isEditing}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        disabled={!isEditing}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="idNumber">National ID Number</Label>
                      <Input
                        id="idNumber"
                        value={profileData.idNumber}
                        disabled={true}
                        className="mt-2 bg-muted"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Farm Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Farm Information</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="farmLocation">Farm Location</Label>
                      <Input
                        id="farmLocation"
                        value={profileData.farmLocation}
                        onChange={(e) => setProfileData({...profileData, farmLocation: e.target.value})}
                        disabled={!isEditing}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="farmSize">Farm Size (Acres)</Label>
                      <Input
                        id="farmSize"
                        value={profileData.farmSize}
                        onChange={(e) => setProfileData({...profileData, farmSize: e.target.value})}
                        disabled={!isEditing}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="primaryCrop">Primary Crop</Label>
                      <Input
                        id="primaryCrop"
                        value={profileData.primaryCrop}
                        onChange={(e) => setProfileData({...profileData, primaryCrop: e.target.value})}
                        disabled={!isEditing}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="yearsExperience">Years of Experience</Label>
                      <Input
                        id="yearsExperience"
                        value={profileData.yearsExperience}
                        onChange={(e) => setProfileData({...profileData, yearsExperience: e.target.value})}
                        disabled={!isEditing}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Financial Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Financial Information</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div>
                    <Label htmlFor="bankAccount">Bank Account Details</Label>
                    <Input
                      id="bankAccount"
                      value={profileData.bankAccount}
                      disabled={true}
                      className="mt-2 bg-muted"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      Contact support to update banking information
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Account Security */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Security</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="w-4 h-4 mr-2" />
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="w-4 h-4 mr-2" />
                      Two-Factor Authentication
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-destructive border-destructive">
                      Delete Account
                    </Button>
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

export default Profile;