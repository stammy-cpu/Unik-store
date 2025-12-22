import { Listing } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="secondary" className="backdrop-blur-md bg-white/90 text-black font-semibold shadow-sm">
            {listing.category}
          </Badge>
          {listing.condition && (
            <Badge variant="outline" className="backdrop-blur-md bg-black/50 text-white border-none">
              {listing.condition}
            </Badge>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pt-12">
          <p className="text-white font-bold text-xl text-green-400">{listing.price}</p>
        </div>
      </div>
      
      <CardContent className="p-5">
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
