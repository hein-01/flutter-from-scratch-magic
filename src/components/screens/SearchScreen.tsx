
import { useState } from "react";
import { Search, Filter, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Templates", count: 24, color: "bg-blue-500" },
    { name: "Components", count: 18, color: "bg-purple-500" },
    { name: "Themes", count: 12, color: "bg-green-500" },
    { name: "Plugins", count: 36, color: "bg-orange-500" },
  ];

  const trendingSearches = [
    "React Components", "Mobile UI", "Dashboard", "E-commerce", "Landing Page"
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Discover</h1>
        <p className="text-gray-500">Find templates, components, and inspiration</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          placeholder="Search for anything..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 pr-12 py-4 border-0 bg-gray-100 rounded-2xl text-lg focus:bg-white focus:shadow-lg transition-all duration-300"
        />
        <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
          <Filter className="w-5 h-5" />
        </Button>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse Categories</h2>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.count} items</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Trending Searches</h2>
        <div className="flex flex-wrap gap-2">
          {trendingSearches.map((search, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="rounded-full border-gray-200 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setSearchQuery(search)}
            >
              {search}
            </Button>
          ))}
        </div>
      </div>

      {/* Empty State */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100">
        <CardContent className="p-8 text-center">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Start your search</h3>
          <p className="text-gray-500">Discover amazing templates and components to accelerate your development</p>
        </CardContent>
      </Card>
    </div>
  );
};
