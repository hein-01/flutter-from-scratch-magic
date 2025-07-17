
import { Plus, TrendingUp, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const HomeScreen = () => {
  const stats = [
    { label: "Projects", value: "12", icon: TrendingUp, color: "bg-blue-500" },
    { label: "Favorites", value: "8", icon: Star, color: "bg-yellow-500" },
    { label: "Recent", value: "3", icon: Clock, color: "bg-green-500" },
  ];

  const recentProjects = [
    { name: "E-commerce App", progress: 85, color: "bg-blue-500" },
    { name: "Weather Widget", progress: 60, color: "bg-purple-500" },
    { name: "Task Manager", progress: 40, color: "bg-green-500" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center pt-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
          <p className="text-gray-500">Let's build something amazing today</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full w-12 h-12 p-0">
          <Plus className="w-6 h-6" />
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4 text-center">
                <div className={`w-10 h-10 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Projects */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Recent Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentProjects.map((project, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className={`w-3 h-3 ${project.color} rounded-full`}></div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{project.name}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 ${project.color} rounded-full transition-all duration-300`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">{project.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-2">Ready to create?</h3>
          <p className="text-blue-100 mb-4">Start a new project and bring your ideas to life</p>
          <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
            Create New Project
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
