import { Layout } from "@/components/layout";
import { ListingCard } from "@/components/listing-card";
import { listings } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocation } from "wouter";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function Listings() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const categoryParam = searchParams.get("category");

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>(categoryParam || "all");

  const filteredListings = listings.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Simple category mapping for demo
    let matchesCategory = true;
    if (categoryFilter !== "all") {
       if (categoryFilter === "real-estate") matchesCategory = item.category === "Real Estate" || item.category === "Land" || item.category === "Shop";
       else if (categoryFilter === "student-items") matchesCategory = item.category === "Student Item";
       else if (categoryFilter === "hostels") matchesCategory = item.category === "Hostel";
       else matchesCategory = item.category.toLowerCase() === categoryFilter.toLowerCase();
    }

    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="bg-secondary/30 border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-heading font-bold mb-4">
            {categoryParam ? 
              categoryParam.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 
              "All Listings"
            }
          </h1>
          <p className="text-muted-foreground">Find the best deals on properties, hostels, and student essentials.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search listings..." 
              className="pl-10" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="real-estate">Real Estate</SelectItem>
                <SelectItem value="hostels">Hostels</SelectItem>
                <SelectItem value="student-items">Student Items</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Grid */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-secondary/20 rounded-xl border border-dashed">
            <h3 className="text-xl font-bold mb-2">No listings found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}