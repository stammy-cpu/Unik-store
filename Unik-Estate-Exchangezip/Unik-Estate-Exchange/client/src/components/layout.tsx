import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MessageCircle, ShoppingBag, Home, Building2, GraduationCap } from "lucide-react";
import logoImage from "@assets/generated_images/minimalist_logo_for_unik_brand.png";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Real Estate", href: "/listings?category=real-estate", icon: Building2 },
    { label: "Hostels", href: "/listings?category=hostels", icon: Building2 },
    { label: "Student Items", href: "/listings?category=student-items", icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group no-underline">
              <img 
                src={logoImage} 
                alt="Unik Logo" 
                className="h-10 w-10 object-contain transition-transform group-hover:scale-105" 
              />
              <span className="font-heading font-bold text-2xl tracking-tight text-primary">
                Unik
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === item.href 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Link href="/messages">
              <a className="font-semibold bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all px-4 py-2 rounded-md inline-flex items-center">
                <MessageCircle className="mr-2 h-4 w-4" />
                Messages
              </a>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a 
                      className="flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      {item.label}
                    </a>
                  </Link>
                ))}
                <div className="h-px bg-border my-2" />
                <Link href="/messages">
                  <a className="w-full text-left py-3 px-4 flex items-center text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Messages
                  </a>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t py-12 mt-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-xl text-primary">Unik</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your trusted partner for real estate, hostels, and student essentials. Quality and trust in every transaction.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold mb-4">Marketplace</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/listings?category=lands"><a className="hover:text-primary">Lands</a></Link></li>
              <li><Link href="/listings?category=housing"><a className="hover:text-primary">Housing</a></Link></li>
              <li><Link href="/listings?category=hostels"><a className="hover:text-primary">Hostels</a></Link></li>
              <li><Link href="/listings?category=student-items"><a className="hover:text-primary">Student Items</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/"><a className="hover:text-primary">About Us</a></Link></li>
              <li><Link href="/"><a className="hover:text-primary">Contact</a></Link></li>
              <li><Link href="/"><a className="hover:text-primary">Terms of Service</a></Link></li>
              <li><Link href="/"><a className="hover:text-primary">Privacy Policy</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Connect</h4>
            <Button className="w-full bg-primary text-white hover:bg-primary/90">
              Contact Support
            </Button>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Unik Brand. All rights reserved.
        </div>
      </footer>
    </div>
  );
}