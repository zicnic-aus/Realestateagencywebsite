import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Search, TrendingUp, Shield, Award, Key, DollarSign, Building2, MapPin, Hammer, Target, PiggyBank, LineChart } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're buying or selling, we're your dedicated partner every step of the way
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden">
            <div className="h-64 relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759428679273-11d914866394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMGtleXMlMjBob21lfGVufDF8fHx8MTc2MTE5NzQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Buyer's Agent"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl text-gray-900 mb-4">Buyer's Agent</h3>
              <p className="text-gray-600 mb-6">
                We help clients find and secure their ideal properties, guiding you through every step of the journey to homeownership.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Search className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--brand-deep-blue)' }} />
                  <div>
                    <p className="text-gray-900">Property Search & Discovery</p>
                    <p className="text-sm text-gray-600">Access exclusive listings and hidden gems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--brand-deep-blue)' }} />
                  <div>
                    <p className="text-gray-900">Expert Negotiation</p>
                    <p className="text-sm text-gray-600">Secure the best price and terms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Key className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--brand-deep-blue)' }} />
                  <div>
                    <p className="text-gray-900">Complete Support</p>
                    <p className="text-sm text-gray-600">From viewing to closing and beyond</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-64 relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1687075430355-ed8df51c1670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwcmVjZWl2aW5nJTIwaG91c2UlMjBrZXlzfGVufDF8fHx8MTc2MTE5ODA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Seller's Agent"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl text-gray-900 mb-4">Seller's Agent</h3>
              <p className="text-gray-600 mb-6">
                We maximise property value and achieve outstanding results, ensuring your property stands out in the market.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--brand-deep-blue)' }} />
                  <div>
                    <p className="text-gray-900">Market Analysis</p>
                    <p className="text-sm text-gray-600">Strategic pricing for maximum returns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--brand-deep-blue)' }} />
                  <div>
                    <p className="text-gray-900">Premium Marketing</p>
                    <p className="text-sm text-gray-600">Showcase your property to qualified buyers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--brand-deep-blue)' }} />
                  <div>
                    <p className="text-gray-900">Outstanding Results</p>
                    <p className="text-sm text-gray-600">Proven track record of successful sales</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Investment Strategy Section */}
        <div className="mt-12">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-full min-h-[300px] relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759428935131-cee6cd331234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwc3RyYXRlZ3klMjBmaW5hbmNpYWwlMjBwbGFubmluZ3xlbnwxfHx8fDE3NjEzMTAzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Property Investment Strategy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10" style={{ backgroundColor: 'var(--brand-light-blue)' }}>
                <h3 className="text-2xl md:text-3xl mb-4" style={{ color: 'var(--brand-deep-blue)' }}>Property Investment Strategy</h3>
                <p className="text-gray-700 mb-6">
                  Build wealth through strategic property investment with personalised guidance tailored to your financial goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--brand-deep-blue)' }} />
                    <div>
                      <p className="text-gray-900">Portfolio Strategy</p>
                      <p className="text-sm text-gray-600">Tailored investment plans for long-term wealth creation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <PiggyBank className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--brand-deep-blue)' }} />
                    <div>
                      <p className="text-gray-900">Superannuation Property Investment</p>
                      <p className="text-sm text-gray-600">Expert guidance on using your super to obtain investment properties</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Key className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--brand-deep-blue)' }} />
                    <div>
                      <p className="text-gray-900">First-Time Investor Equity Strategy</p>
                      <p className="text-sm text-gray-600">Leverage equity from your home to purchase your first investment property</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <LineChart className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--brand-deep-blue)' }} />
                    <div>
                      <p className="text-gray-900">Market Analysis & Research</p>
                      <p className="text-sm text-gray-600">Data-driven insights for optimal investment decisions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mb-12 mt-16">
          <h3 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Special Projects
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive development solutions from concept to completion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="h-56 relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1675529734325-f735f7a25121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJua2V5JTIwaG9tZSUyMG1vZGVybnxlbnwxfHx8fDE3NjEyNzM1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Turnkey Homes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--brand-light-blue)' }}>
                  <Building2 className="h-5 w-5" style={{ color: 'var(--brand-deep-blue)' }} />
                </div>
                <h4 className="text-xl text-gray-900">Turnkey Homes</h4>
              </div>
              <p className="text-gray-600">
                Complete ready-to-occupy homes with all finishes, fixtures, and features included. Move in without the stress of construction management.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="h-56 relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1685266325930-ffe4937f6eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kJTIwc3ViZGl2aXNpb24lMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjEyNzM1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Subdivisions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--brand-light-blue)' }}>
                  <MapPin className="h-5 w-5" style={{ color: 'var(--brand-deep-blue)' }} />
                </div>
                <h4 className="text-xl text-gray-900">Subdivisions</h4>
              </div>
              <p className="text-gray-600">
                Expert land subdivision services from planning and approvals to infrastructure and lot creation. Maximise your land's potential.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="h-56 relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1723107638858-331404b1a09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMGRldmVsb3BtZW50JTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MTI3MzUzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Property Development"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--brand-light-blue)' }}>
                  <Hammer className="h-5 w-5" style={{ color: 'var(--brand-deep-blue)' }} />
                </div>
                <h4 className="text-xl text-gray-900">Property Development</h4>
              </div>
              <p className="text-gray-600">
                End-to-end development solutions including site acquisition, design, construction, and project management for optimal returns.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
