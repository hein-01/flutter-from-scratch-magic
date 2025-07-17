
import { Settings, Heart, Download, Share, LogOut } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileScreen = () => {
  const menuItems = [
    { icon: Settings, label: "Settings", description: "App preferences and configuration" },
    { icon: Heart, label: "Favorites", description: "Your liked templates and components" },
    { icon: Download, label: "Downloads", description: "Manage your downloaded content" },
    { icon: Share, label: "Share", description: "Invite friends and colleagues" },
  ];

  const stats = [
    { label: "Projects", value: "12" },
    { label: "Templates", value: "28" },
    { label: "Downloads", value: "156" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-500">Manage your account and preferences</p>
      </div>

      {/* Profile Card */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Avatar className="w-16 h-16 border-4 border-white/20">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-white/20 text-white text-xl font-bold">JD</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">John Developer</h2>
              <p className="text-blue-100">john.dev@email.com</p>
              <p className="text-blue-100 text-sm">Member since 2024</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-blue-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Menu Items */}
      <div className="space-y-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.label}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Logout Button */}
      <Card className="border-0 shadow-lg border-red-100">
        <CardContent className="p-4">
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
