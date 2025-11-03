import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, TrendingUp, Home } from "lucide-react";

export function MeetTheRealtor() {
  return (
    <section id="realtor" className="py-20" style={{ backgroundColor: 'var(--brand-light-blue)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ color: 'var(--brand-deep-blue)' }}>Meet Your Realtor</h2>
          <div className="w-20 h-1 mx-auto mb-4" style={{ backgroundColor: 'var(--brand-rich-gold)' }}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg translate-x-4 translate-y-4" style={{ backgroundColor: 'var(--brand-rich-gold)', opacity: 0.2 }}></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1659100947220-48b5d5738148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxMjI5MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Isaac Nicol - Licensed Real Estate Agent"
                className="relative rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <Award className="h-8 w-8 mx-auto mb-2" style={{ color: 'var(--brand-rich-gold)' }} />
                <p className="text-sm text-gray-600">Licensed Agent</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2" style={{ color: 'var(--brand-rich-gold)' }} />
                <p className="text-sm text-gray-600">Investment Strategist</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <Home className="h-8 w-8 mx-auto mb-2" style={{ color: 'var(--brand-rich-gold)' }} />
                <p className="text-sm text-gray-600">Buyers Agent</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <h3 className="mb-3" style={{ color: 'var(--brand-deep-blue)' }}>Welcome! I'm Isaac Nicol</h3>
            <p className="mb-4 text-gray-600 italic">Licensed Real Estate Agent | Property Investment Strategist | Buyers Agent</p>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Thanks for stopping by! I'm passionate about property and helping people like you achieve their real estate goals—whether that's buying your dream home, selling your home for the best possible outcome, or building wealth through strategic property investment.
              </p>
              
              <p>
                I've had the privilege of assisting several individuals and families on their property journey, combining my background in ICT leadership and strategic planning with hands-on real estate experience. This unique blend allows me to bring analytical rigour and proven strategies to every transaction.
              </p>
              
              <div className="p-6 rounded-lg my-6" style={{ backgroundColor: 'var(--brand-light-gold)', borderLeft: '4px solid var(--brand-rich-gold)' }}>
                <p className="italic" style={{ color: 'var(--brand-deep-blue)' }}>
                  <strong>Here's what sets us apart:</strong> "Everything we advise on, is what is working for us." We don't offer theoretical advice or generic tips—we share strategies we've personally tested and succeeded with in our own property portfolio. This authentic approach means you get honest, practical guidance backed by real results.
                </p>
              </div>
              
              <p>
                Whether you're a first-home buyer taking that exciting first step, selling your home and want to maximise your return, or an investor looking to expand your portfolio, I'm here to help you make confident, informed decisions.
              </p>
              
              <p className="mt-6" style={{ color: 'var(--brand-deep-blue)' }}>
                <strong>Let's have a chat about your property goals and how I can help you achieve them.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
