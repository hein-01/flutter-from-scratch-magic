
import { useState } from "react";
import { Home, Search, Bell, User } from "lucide-react";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { SearchScreen } from "@/components/screens/SearchScreen";
import { NotificationsScreen } from "@/components/screens/NotificationsScreen";
import { ProfileScreen } from "@/components/screens/ProfileScreen";

const tabs = [
  { id: "home", label: "Home", icon: Home, component: HomeScreen },
  { id: "search", label: "Search", icon: Search, component: SearchScreen },
  { id: "notifications", label: "Notifications", icon: Bell, component: NotificationsScreen },
  { id: "profile", label: "Profile", icon: User, component: ProfileScreen },
];

export const MainApp = () => {
  const [activeTab, setActiveTab] = useState("home");

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || HomeScreen;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main content */}
      <div className="flex-1 pb-20">
        <ActiveComponent />
      </div>

      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-pb">
        <div className="flex justify-around items-center py-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Icon className={`w-6 h-6 mb-1 transition-transform duration-200 ${
                  isActive ? "scale-110" : ""
                }`} />
                <span className={`text-xs font-medium ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
