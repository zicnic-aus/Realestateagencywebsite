import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";

export function Properties() {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MTEzMDEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Modern Downtown Penthouse",
      location: "Downtown District",
      price: "$1,250,000",
      beds: 3,
      baths: 2,
      sqft: "2,400",
      status: "For Sale"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1689574666875-6c591bca0b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHByb3BlcnR5fGVufDF8fHx8MTc2MTEyODQyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Charming Family Home",
      location: "Suburban Heights",
      price: "$850,000",
      beds: 4,
      baths: 3,
      sqft: "3,200",
      status: "For Sale"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYxMTUyNDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Luxury Estate",
      location: "Prestigious Hills",
      price: "$2,950,000",
      beds: 5,
      baths: 4,
      sqft: "5,800",
      status: "Just Listed"
    }
  ];

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover exceptional properties from our current portfolio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 hover:opacity-90" style={{ backgroundColor: 'var(--brand-deep-blue)' }}>
                  {property.status}
                </Badge>
              </div>
              <div className="p-6">
                <p className="text-2xl mb-2" style={{ color: 'var(--brand-deep-blue)' }}>{property.price}</p>
                <h3 className="text-xl text-gray-900 mb-2">{property.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="h-4 w-4" />
                  <p>{property.location}</p>
                </div>
                <div className="flex items-center gap-4 text-gray-600 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{property.beds} beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.baths} baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
