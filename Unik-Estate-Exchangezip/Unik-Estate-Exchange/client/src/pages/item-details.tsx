import { Layout } from "@/components/layout";
import { listings } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRoute, Link } from "wouter";
import { MapPin, MessageCircle, Share2, Heart, ArrowLeft, CheckCircle2 } from "lucide-react";
import NotFound from "@/pages/not-found";
import { useState } from "react";

export default function ItemDetails() {
  const [match, params] = useRoute("/listing/:id");
  const id = params?.id;
  const listing = listings.find(l => l.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!listing) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Listing not found</h1>
          <Link href="/listings">
            <Button>Back to Listings</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const images = [listing.image, listing.image, listing.image];

  return (
    <Layout>
      <div className="bg-secondary/30 border-b py-4">
        <div className="container mx-auto px-4">
          <Link href="/listings">
            <a className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Listings
            </a>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary border relative group">
              <img 
                src={images[activeImage]} 
                alt={listing.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="secondary" size="icon" className="rounded-full shadow-md bg-white/80 backdrop-blur hover:bg-white hover:text-red-500">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full shadow-md bg-white/80 backdrop-blur hover:bg-white">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === idx ? "border-primary ring-2 ring-primary/20" : "border-transparent hover:border-primary/50"
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-secondary text-foreground hover:bg-secondary/80 text-sm py-1 px-3">
                  {listing.category}
                </Badge>
                {listing.condition && (
                  <Badge variant="outline" className="text-sm py-1 px-3">
                    {listing.condition}
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 leading-tight">
                {listing.title}
              </h1>
              <div className="flex items-center text-muted-foreground mb-6">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="text-lg">{listing.location}</span>
              </div>
              <div className="text-3xl font-bold text-green-500 mb-8">
                {listing.price}
              </div>

              <div className="prose prose-stone max-w-none mb-8 text-muted-foreground">
                <p>{listing.description}</p>
              </div>

              {listing.features && (
                <div className="mb-8">
                  <h3 className="font-heading font-bold text-lg mb-4">Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {listing.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t">
                <Link href="/messages" className="flex-1">
                  <Button size="lg" className="w-full text-lg h-12 px-8 bg-red-600 hover:bg-red-700 text-white shadow-lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Message Unik
                  </Button>
                </Link>
                <Button size="lg" className="flex-1 text-lg h-12 bg-green-600 hover:bg-green-700 text-white shadow-lg">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.006c-3.15 0-5.905 2.754-5.905 5.904 0 1.052.264 2.092.768 3.021l-1.197 4.374 4.526-1.183c.885.467 1.879.721 2.905.721h.006c3.152 0 5.906-2.754 5.906-5.905 0-1.584-.623-3.073-1.756-4.192-1.133-1.12-2.621-1.74-4.209-1.74"/>
                  </svg>
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
