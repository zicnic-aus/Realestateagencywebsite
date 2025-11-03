import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { InquiryForm } from "./InquiryForm";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYxMTUyNDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6">
            <p className="text-lg md:text-xl mb-2 tracking-wide" style={{ color: 'var(--brand-rich-gold)' }}>ONE AGENCY, EVERY ANGLE</p>
          </div>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6">
            Bridging Dreams to Reality
          </h1>
          <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-2xl">
            We don't just buy and sell property — we help you build your future through smart real estate moves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <InquiryForm defaultService="buyer">
              <Button size="lg" className="text-lg px-8 py-6 hover:opacity-90" style={{ backgroundColor: 'var(--brand-deep-blue)' }}>
                Find Your Dream Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </InquiryForm>
            <InquiryForm defaultService="seller">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6" style={{ backgroundColor: 'var(--brand-rich-gold)' }}>
                Sell Your Property
              </Button>
            </InquiryForm>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
