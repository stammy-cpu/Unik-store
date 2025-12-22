import { Listing } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img 
          src={listing.image} 
          alt={listing.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <CardContent className="p-5">
        <p className="text-green-600 font-bold text-lg mb-3">{listing.price}</p>
        <h3 className="font-heading font-bold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {listing.title}
        </h3>
        <div className="flex items-center text-muted-foreground text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1 text-primary/70" />
          <span className="truncate">{listing.location}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 h-10">
          {listing.description}
        </p>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Link href={`/listing/${listing.id}`} className="w-full">
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
            View
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
