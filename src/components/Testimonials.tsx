import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah & James Mitchell",
      role: "First Home Buyers",
      image: "https://images.unsplash.com/photo-1633460730540-e4029e619db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjExMzMxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      initials: "SM",
      feedback: "IMMD Realty made our dream of homeownership a reality. Their buyer's agent guided us through every step, found properties we never would have discovered on our own, and negotiated a fantastic price. We couldn't be happier!",
      rating: 5,
      location: "White Rock, QLD"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Seller",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjExMzM0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      initials: "MC",
      feedback: "Outstanding service from start to finish. They sold my property above the asking price within two weeks. Their marketing strategy was exceptional, and the communication throughout the process was superb. Highly recommended!",
      rating: 5,
      location: "Ipswich, QLD"
    },
    {
      id: 3,
      name: "The Thompson Family",
      role: "Property Buyers",
      image: "https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzYxMTI3OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      initials: "TF",
      feedback: "As a growing family, we needed more space and IMMD Realty delivered. Their expertise and local market knowledge were invaluable. They truly understood our needs and found us the perfect family home in our ideal location.",
      rating: 5,
      location: "Springfield, QLD"
    },
    {
      id: 4,
      name: "Jennifer Wilson",
      role: "Investment Property Seller",
      initials: "JW",
      feedback: "Professional, knowledgeable, and results-driven. They handled the sale of my investment property with such care and attention to detail. The entire process was stress-free, and they achieved a result that exceeded my expectations.",
      rating: 5,
      location: "Brisbane, QLD"
    },
    {
      id: 5,
      name: "David & Emma Parker",
      role: "Downsizing Buyers",
      initials: "DP",
      feedback: "After 30 years in our family home, we were nervous about downsizing. IMMD Realty was patient, understanding, and incredibly supportive. They found us a beautiful property that perfectly suits this new chapter of our lives.",
      rating: 5,
      location: "Goodna, QLD"
    },
    {
      id: 6,
      name: "Robert Anderson",
      role: "Property Seller",
      initials: "RA",
      feedback: "Their 'One Agency, Every Angle' approach really shows. They understood both sides of the transaction and positioned my property perfectly in the market. The result? Multiple offers and a sale well above reserve. Exceptional service!",
      rating: 5,
      location: "Ripley, QLD"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from real people who trusted us with their property journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 hover:shadow-xl transition-shadow relative">
              <Quote className="h-8 w-8 absolute top-6 right-6" style={{ color: 'var(--brand-light-blue)' }} />
              
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-16 w-16">
                  {testimonial.image && (
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  )}
                  <AvatarFallback style={{ backgroundColor: 'var(--brand-light-blue)', color: 'var(--brand-deep-blue)' }}>
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs" style={{ color: 'var(--brand-deep-blue)' }}>{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4" style={{ fill: 'var(--brand-rich-gold)', color: 'var(--brand-rich-gold)' }} />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.feedback}"
              </p>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block rounded-2xl p-8" style={{ backgroundColor: 'var(--brand-light-gold)' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
              <div className="text-center">
                <p className="text-4xl mb-2" style={{ color: 'var(--brand-deep-blue)' }}>500+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-2" style={{ color: 'var(--brand-deep-blue)' }}>4.9/5</p>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-2" style={{ color: 'var(--brand-deep-blue)' }}>98%</p>
                <p className="text-gray-600">Would Recommend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
