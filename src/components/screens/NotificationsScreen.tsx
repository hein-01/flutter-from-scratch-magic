
import { Bell, CheckCircle, AlertCircle, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const NotificationsScreen = () => {
  const notifications = [
    {
      id: 1,
      type: "success",
      icon: CheckCircle,
      title: "Project deployed successfully",
      message: "Your e-commerce app is now live and running",
      time: "2 hours ago",
      color: "bg-green-500",
    },
    {
      id: 2,
      type: "info",
      icon: Info,
      title: "New template available",
      message: "Check out the new dashboard template in our library",
      time: "5 hours ago",
      color: "bg-blue-500",
    },
    {
      id: 3,
      type: "warning",
      icon: AlertCircle,
      title: "Update recommended",
      message: "A new version of React is available for your project",
      time: "1 day ago",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center pt-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-500">Stay updated with your projects</p>
        </div>
        <Button variant="outline" size="sm" className="rounded-full">
          Mark all read
        </Button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <Card key={notification.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 ${notification.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1">{notification.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                    <p className="text-gray-400 text-xs">{notification.time}</p>
                  </div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State for when no notifications */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100">
        <CardContent className="p-8 text-center">
          <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">All caught up!</h3>
          <p className="text-gray-500">You've read all your notifications</p>
        </CardContent>
      </Card>
    </div>
  );
};
