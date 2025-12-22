import { Layout } from "@/components/layout";
import { HeroSlider } from "@/components/hero-slider";
import { ListingCard } from "@/components/listing-card";
import { listings } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Building2, GraduationCap, Home as HomeIcon, CheckCircle2, MessageSquare, Plus } from "lucide-react";
import instaPost1 from "@assets/stock_images/insta_1.jpg";
import instaPost2 from "@assets/stock_images/insta_2.jpg";
import instaPost3 from "@assets/stock_images/insta_3.jpg";

export default function Home() {
  const featuredListings = listings.filter(l => l.isFeatured);

  return (
    <Layout>
      <HeroSlider />
      
      {/* Featured Categories */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground">Find exactly what you're looking for on OAU campus and beyond.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
            <Link href="/listings?category=real-estate">
              <a className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all h-full">
                <div className="relative pt-[75%]">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                    <div className="bg-primary/20 p-4 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-1">Real Estate</h3>
                    <p className="text-sm text-muted-foreground">Lands, Housing, Shops</p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/listings?category=student-items">
              <a className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all h-full">
                <div className="relative pt-[75%]">
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                    <div className="bg-blue-500/20 p-4 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-1">Student Items</h3>
                    <p className="text-sm text-muted-foreground">Buy & Sell Used Items</p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/listings?category=hostels">
              <a className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all h-full">
                <div className="relative pt-[75%]">
                  <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                    <div className="bg-green-500/20 p-4 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                      <HomeIcon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-1">Hostels</h3>
                    <p className="text-sm text-muted-foreground">Student Accommodation</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Featured Listings</h2>
              <p className="text-muted-foreground">Top properties and items on Unik right now.</p>
            </div>
            <Link href="/listings">
              <Button variant="ghost" className="hidden md:flex">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/listings">
              <Button variant="outline" className="w-full">
                View All Listings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hostels Near OAU */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Hostels Near OAU</h2>
              <p className="text-muted-foreground">Find your perfect accommodation around campus.</p>
            </div>
            <Link href="/listings?category=hostels">
              <Button variant="ghost" className="hidden md:flex">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {listings.filter(l => l.category === "Hostel").map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Items in Lagos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Popular Items in Lagos</h2>
              <p className="text-muted-foreground">Shop quality items from sellers across Lagos.</p>
            </div>
            <Link href="/listings?category=student-items">
              <Button variant="ghost" className="hidden md:flex">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {listings.filter(l => l.category === "Student Item").map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Properties in Lagos */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Real Estate in Lagos</h2>
              <p className="text-muted-foreground">Premium properties available in Lagos.</p>
            </div>
            <Link href="/listings?category=real-estate">
              <Button variant="ghost" className="hidden md:flex">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {listings.filter(l => l.category === "Real Estate" || l.category === "Land" || l.category === "Shop").slice(0, 4).map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Latest from Our Instagram</h2>
            <p className="text-muted-foreground">Follow us for daily updates and behind-the-scenes content</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Instagram Post 1 - Apartments */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary border">
                <img 
                  src={instaPost1}
                  alt="Beautiful modern apartment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center space-y-4">
                    <div className="flex items-center justify-center gap-6 text-xl">
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        <span className="font-bold">2.4K</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        <span className="font-bold">342</span>
                      </div>
                    </div>
                    <p className="font-semibold">Beautiful Apartments</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Instagram Post 2 - Student Items */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary border">
                <img 
                  src={instaPost2}
                  alt="Student items and accessories"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center space-y-4">
                    <div className="flex items-center justify-center gap-6 text-xl">
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        <span className="font-bold">3.1K</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        <span className="font-bold">567</span>
                      </div>
                    </div>
                    <p className="font-semibold">Student Essentials</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Instagram Post 3 - Hostels */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary border">
                <img 
                  src={instaPost3}
                  alt="Comfortable hostel accommodation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center space-y-4">
                    <div className="flex items-center justify-center gap-6 text-xl">
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        <span className="font-bold">1.8K</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        <span className="font-bold">298</span>
                      </div>
                    </div>
                    <p className="font-semibold">Comfy Hostels</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="text-center mt-12">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                Follow Us on Instagram →
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Unik */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-heading font-bold text-center mb-16">Why Choose Unik?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-400 text-primary p-4 rounded-full mb-6 backdrop-blur-sm">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Listings</h3>
              <p className="text-white/80">Every property and item on Unik is carefully checked for authenticity and quality.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-400 text-primary p-4 rounded-full mb-6 backdrop-blur-sm">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Direct Communication</h3>
              <p className="text-white/80">Chat directly with Unik. No hidden fees, no middlemen, just honest transactions.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-400 text-primary p-4 rounded-full mb-6 backdrop-blur-sm">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Service</h3>
              <p className="text-white/80">Get top-tier support and a seamless experience from browsing to checkout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Can't Find What You're Looking For */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/50 rounded-3xl p-12 md:p-16 border border-primary/20 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Submit a request and let Unik know exactly what you need. We'll help you find it!</p>
            <Link href="/request-item">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg">
                <Plus className="mr-2 h-5 w-5" />
                Request an Item
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
